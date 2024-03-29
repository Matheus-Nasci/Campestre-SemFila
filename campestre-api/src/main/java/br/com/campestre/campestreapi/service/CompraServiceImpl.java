package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.domain.entities.Pedido;
import br.com.campestre.campestreapi.domain.StatusPedido;
import br.com.campestre.campestreapi.domain.entities.Produto;
import br.com.campestre.campestreapi.domain.repository.PedidoRepositorio;
import br.com.campestre.campestreapi.domain.repository.ProdutoRepositorio;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.repository.NotalNaoFiscalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.concurrent.*;
import java.util.stream.Collectors;

@Service
public class CompraServiceImpl implements CompraService {
    private final PedidoRepositorio pedidoRepositorio;
    private final ProdutoRepositorio produtoRepositorio;
    private final NotalNaoFiscalRepository notalNaoFiscalRepository;

    @Autowired
    public CompraServiceImpl(PedidoRepositorio pedidoRepositorio, ProdutoRepositorio produtoRepositorio,
                             NotalNaoFiscalRepository notalNaoFiscalRepository) {
        this.pedidoRepositorio = pedidoRepositorio;
        this.produtoRepositorio = produtoRepositorio;
        this.notalNaoFiscalRepository = notalNaoFiscalRepository;
    }

    @Override
    public void realizar(CompraRequest compraRequest) {

        CompletableFuture<Void> completableFuture = CompletableFuture
                .runAsync(() -> this.realizarCompra(compraRequest));

        try {
            completableFuture.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Collection<ComprasDto> listar(StatusPedido statusPedido, Boolean showImage) {

        Collection<Integer> fichas;

        if (statusPedido != null)
            fichas = this.pedidoRepositorio.obterNumerosFichasPreparando(statusPedido);
        else
            fichas = this.pedidoRepositorio.obterNumerosFichas();

        var listaCompras = new ArrayList<ComprasDto>();

        for (var ficha : fichas) {
            Collection<Pedido> pedidos = this.pedidoRepositorio.findAllByNumeroFicha(ficha);
            var pedido = pedidos.stream().findFirst().get();
            var produtos = pedidos.stream().map(Pedido::getProduto)
                    .collect(Collectors.toList()).stream().map(produto -> produto.toResponse(showImage))
                    .collect(Collectors.toList());
            listaCompras.add(new ComprasDto(pedido.getNomeCliente(), pedido.getDataHoraPedido(), pedido.getNumeroFicha(), pedido.getStatusPedido().toString(), produtos));
        }

        return listaCompras;
    }

    @Override
    public void atualizarPedido(StatusPedido statusPedido, Integer numeroFicha) {
        this.pedidoRepositorio.atualizarStatusPedidoPeloNumeroFicha(statusPedido, numeroFicha);
        var pedidos = this.pedidoRepositorio.findAllByNumeroFicha(numeroFicha);
        var pedido = pedidos.stream().findFirst().get();
        var produtos = pedidos.stream().map(Pedido::getProduto).collect(Collectors.toList()).stream().map(Produto::toResponse).collect(Collectors.toList());
        new ComprasDto(pedido.getNomeCliente(), pedido.getDataHoraPedido(), pedido.getNumeroFicha(), pedido.getStatusPedido().toString(), produtos);
    }

    private void realizarCompra(CompraRequest compraRequest) {

        var datetime = LocalDateTime.now();

        var ultimaInsercao = this.pedidoRepositorio.getTopByOrderByIdDesc();

        var listaPedidos = compraRequest.getPedido()
                .getProdutos()
                .stream()
                .map(produto -> new Pedido(compraRequest.getPedido().getNomeCliente(),
                        StatusPedido.PREPARANDO,
                        this.produtoRepositorio.findById(produto.getIdProduto()).orElseGet(null),
                        datetime,
                        ultimaInsercao != null && ultimaInsercao.getNumeroFicha() != null ? ultimaInsercao.getNumeroFicha() + 1 : 1))
                .collect(Collectors.toList());


        this.pedidoRepositorio.saveAll(listaPedidos);

        ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();

        executorService.schedule(() -> {
            this.emitirNotaNaoFiscal();
        }, 200, TimeUnit.MILLISECONDS);

        // Encerrar o executorService
        executorService.shutdown();
    }

    private void emitirNotaNaoFiscal() {
        var listaPedidos = this.listar(StatusPedido.PREPARANDO, false);
        var ultimoPedido = listaPedidos.stream()
                .map(pedido -> pedido.toAcompanharPedido(false))
                .collect(Collectors.toList())
                .stream()
                .reduce((primeiro, segundo) -> segundo);
        try {
            this.notalNaoFiscalRepository.enviar(ultimoPedido.get());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}

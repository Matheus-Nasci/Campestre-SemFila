package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.domain.entities.Pedido;
import br.com.campestre.campestreapi.domain.entities.StatusPedido;
import br.com.campestre.campestreapi.domain.repository.PedidoRepositorio;
import br.com.campestre.campestreapi.domain.repository.ProdutoRepositorio;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.domain.service.RabbitMQPublisherService;
import br.com.campestre.campestreapi.framework.extensions.JsonExtensions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class CompraServiceImpl implements CompraService {
    private final RabbitMQPublisherService rabbitMQPublisherService;
    private final PedidoRepositorio pedidoRepositorio;
    private final ProdutoRepositorio produtoRepositorio;

    @Autowired
    public CompraServiceImpl(RabbitMQPublisherService rabbitMQPublisherService, PedidoRepositorio pedidoRepositorio, ProdutoRepositorio produtoRepositorio) {
        this.rabbitMQPublisherService = rabbitMQPublisherService;
        this.pedidoRepositorio = pedidoRepositorio;
        this.produtoRepositorio = produtoRepositorio;
    }

    @Override
    public void realizar(CompraRequest compraRequest) {
        //TODO implementar chamada ao serviço de emissão de nota não fiscal síncrono
        CompletableFuture<Void> completableFuture = CompletableFuture
                .runAsync(() -> this.realizarCompra(compraRequest));

        try {
            completableFuture.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Collection<ComprasDto> listar() {
        var fochas = this.pedidoRepositorio.obterNumerosFichas();

        var listaCompras = new ArrayList<ComprasDto>();

        for (var ficha : fochas) {
            Collection<Pedido> pedidos = pedidoRepositorio.findAllByNumeroFicha(ficha);
            var pedido = pedidos.stream().findFirst().get();
            var produtos = pedidos.stream().map(Pedido::getProduto).collect(Collectors.toList());
            listaCompras.add(new ComprasDto(pedido.getNomeCliente(), pedido.getDataHoraPedido(), pedido.getNumeroFicha(), pedido.getStatusPedido().toString(), produtos));
        }

        return listaCompras;
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

        CompletableFuture<Void> completableFuture = CompletableFuture
                .runAsync(() -> this.rabbitMQPublisherService.send(JsonExtensions.serializeToJson(compraRequest)));

        try {
            completableFuture.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException(e);
        }
    }
}

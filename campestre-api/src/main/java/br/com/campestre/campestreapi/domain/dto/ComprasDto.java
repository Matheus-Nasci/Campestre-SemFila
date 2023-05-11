package br.com.campestre.campestreapi.domain.dto;

import br.com.campestre.campestreapi.controllers.response.ProdutoResponse;
import br.com.campestre.campestreapi.domain.DetalhesPedido;
import br.com.campestre.campestreapi.domain.entities.Produto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
public class ComprasDto {
    private String nome;
    private LocalDateTime dataHoraPedido;
    private Integer numeroFicha;
    private String statusPedido;
    private List<ProdutoResponse> produtos;

    public ComprasDto(String nome, LocalDateTime dataHoraPedido, Integer numeroFicha, String statusPedido, List<ProdutoResponse> produtos) {
        this.nome = nome;
        this.dataHoraPedido = dataHoraPedido;
        this.numeroFicha = numeroFicha;
        this.statusPedido = statusPedido;
        this.produtos = produtos;
    }

    public AcompanharPedidoDto toAcompanharPedido(Boolean showImage) {
        var acompanharPedido = new AcompanharPedidoDto();
        acompanharPedido.setNome(this.nome);
        acompanharPedido.setDataHoraPedido(this.dataHoraPedido);
        acompanharPedido.setNumeroFicha(this.numeroFicha);
        acompanharPedido.setStatusPedido(this.statusPedido);
        List<DetalhesPedido> detalhesPedido = new ArrayList<>();
        Map<String, Integer> produtoQuantidadeMap = new HashMap<>();

        for (ProdutoResponse produto : this.produtos) {
            String produtoKey = produto.getId() + "_" + produto.getNome() + "_" + produto.getValor() + "_" + produto.getTamanho();

            if (produtoQuantidadeMap.containsKey(produtoKey)) {
                int quantidade = produtoQuantidadeMap.get(produtoKey);
                produtoQuantidadeMap.put(produtoKey, quantidade + 1);
            } else {
                produtoQuantidadeMap.put(produtoKey, 1);
            }
        }

        for (Map.Entry<String, Integer> entry : produtoQuantidadeMap.entrySet()) {
            String produtoKey = entry.getKey();
            int quantidade = entry.getValue();

            String[] produtoKeyParts = produtoKey.split("_");
            int id = Integer.parseInt(produtoKeyParts[0]);
            String nome = produtoKeyParts[1];
            double valor = Double.parseDouble(produtoKeyParts[2]);
            String tamanho = produtoKeyParts[3];

            ProdutoResponse produto = new ProdutoResponse(new Produto(id, nome, valor, tamanho), true);
            DetalhesPedido detalhes = new DetalhesPedido(produto, quantidade);
            detalhesPedido.add(detalhes);
        }

        acompanharPedido.setDetalhesPedido(detalhesPedido);

        return acompanharPedido;
    }
}

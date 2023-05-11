package br.com.campestre.campestreapi.domain;


import br.com.campestre.campestreapi.controllers.response.ProdutoResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DetalhesPedido {
    private ProdutoResponse produtoResponse;
    private Integer quantidade;

    public DetalhesPedido(ProdutoResponse produtoResponse, Integer quantidade) {
        this.produtoResponse = produtoResponse;
        this.quantidade = quantidade;
    }
}

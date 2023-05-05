package br.com.campestre.campestreapi.controllers.requests;

import br.com.campestre.campestreapi.domain.entities.Produto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProdutoRequest {
    private String nome;
    private Double valor;
    private String tamanho;

    public Produto toDomain() {
        return new Produto(nome, valor, tamanho);
    }
}

package br.com.campestre.campestreapi.controllers.requests;

import br.com.campestre.campestreapi.domain.entities.Produto;
import br.com.campestre.campestreapi.domain.entities.StatusPedido;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

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

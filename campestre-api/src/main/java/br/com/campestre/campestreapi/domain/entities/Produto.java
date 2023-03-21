package br.com.campestre.campestreapi.domain.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
//@Embeddable
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 45)
    private String nome;
    private Double valor;
    @Column(length = 45)
    private String tamanho;

    public Produto() {}

    public Produto(String nome, Double valor, String tamanho) {
        this.nome = nome;
        this.valor = valor;
        this.tamanho = tamanho;
    }
}

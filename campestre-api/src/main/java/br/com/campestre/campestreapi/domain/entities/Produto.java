package br.com.campestre.campestreapi.domain.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Produto {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(length = 45)
    private String nome;
    private Double valor;
    @Column(length = 45)
    private String tamanho;
    @Enumerated(EnumType.STRING)
    private StatusPedido statusPedido;

    public Produto() {}
}

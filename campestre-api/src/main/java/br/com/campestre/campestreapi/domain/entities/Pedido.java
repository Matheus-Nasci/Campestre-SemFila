package br.com.campestre.campestreapi.domain.entities;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int numeroFicha;
    private String nomeCliente;
    private LocalDateTime dataHoraPedido;
    private boolean recebido;
    @OneToOne
    private Produto produto;

    public Pedido() {}
}

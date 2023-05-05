package br.com.campestre.campestreapi.domain.entities;

import javax.persistence.*;

import br.com.campestre.campestreapi.domain.StatusPedido;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nomeCliente;
    private LocalDateTime dataHoraPedido;
    @Enumerated(EnumType.STRING)
    private StatusPedido statusPedido;
    private Integer numeroFicha;
    @OneToOne
    private Produto produto;

    public Pedido() {}

    public Pedido(String nomeCliente, StatusPedido statusPedido, Produto produto, LocalDateTime dataHoraPedido, Integer numeroFicha) {
        this.nomeCliente = nomeCliente;
        this.dataHoraPedido = dataHoraPedido;
        this.statusPedido = statusPedido;
        this.produto = produto;
        this.numeroFicha = numeroFicha;
    }
}

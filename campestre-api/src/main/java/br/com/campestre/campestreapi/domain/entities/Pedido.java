package br.com.campestre.campestreapi.domain.entities;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int numeroFicha;
    private String nomeCliente;
    private LocalDateTime dataHoraPedido;
    @Enumerated(EnumType.STRING)
    private StatusPedido statusPedido;
    @OneToOne
    private Produto produto;

    public Pedido() {}
}

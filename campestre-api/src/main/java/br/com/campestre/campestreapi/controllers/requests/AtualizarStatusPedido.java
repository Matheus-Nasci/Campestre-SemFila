package br.com.campestre.campestreapi.controllers.requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AtualizarStatusPedido {
    private Integer numeroFicha;
    private String status;
}

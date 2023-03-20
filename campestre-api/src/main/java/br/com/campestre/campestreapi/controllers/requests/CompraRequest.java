package br.com.campestre.campestreapi.controllers.requests;

import br.com.campestre.campestreapi.domain.entities.dto.PedidoDto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CompraRequest {
    private PedidoDto pedido;
}

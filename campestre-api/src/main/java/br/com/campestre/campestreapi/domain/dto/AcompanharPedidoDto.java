package br.com.campestre.campestreapi.domain.dto;

import br.com.campestre.campestreapi.domain.DetalhesPedido;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class AcompanharPedidoDto {

    private String nome;
    private LocalDateTime dataHoraPedido;
    private Integer numeroFicha;
    private String statusPedido;
    private List<DetalhesPedido> detalhesPedido;

}

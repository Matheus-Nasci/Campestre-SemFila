package br.com.campestre.campestreapi.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
public class PedidoDto {
    private String nomeCliente;
    private Collection<ProdutoResponse> produtos;
}

package br.com.campestre.campestreapi.domain.dto;

import br.com.campestre.campestreapi.controllers.response.ProdutoResponse;
import br.com.campestre.campestreapi.domain.entities.Produto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class ComprasDto {
    private String nome;
    private LocalDateTime dataHoraPedido;
    private Integer numeroFicha;
    private String statusPedido;
    private List<ProdutoResponse> produtos;

    public ComprasDto(String nome, LocalDateTime dataHoraPedido, Integer numeroFicha, String statusPedido, List<ProdutoResponse> produtos) {
        this.nome = nome;
        this.dataHoraPedido = dataHoraPedido;
        this.numeroFicha = numeroFicha;
        this.statusPedido = statusPedido;
        this.produtos = produtos;
    }
}

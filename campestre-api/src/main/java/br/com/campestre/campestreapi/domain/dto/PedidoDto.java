package br.com.campestre.campestreapi.domain.dto;

import br.com.campestre.campestreapi.domain.Produto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.Collection;

@Getter
@Setter
public class PedidoDto {
    private String nomeCliente;
    private Collection<ProdutoDto> produtos;
}

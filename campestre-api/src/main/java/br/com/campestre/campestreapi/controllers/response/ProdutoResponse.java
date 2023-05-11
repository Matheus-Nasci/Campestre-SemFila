package br.com.campestre.campestreapi.controllers.response;

import br.com.campestre.campestreapi.domain.entities.Produto;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.codec.binary.Base64;

import javax.persistence.Column;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProdutoResponse {
    private Integer id;
    private String nome;
    private Double valor;
    private String tamanho;
    private String imagem;

    public ProdutoResponse(Produto produto, Boolean showImage) {
        this.id = produto.getId();
        this.nome = produto.getNome();
        this.valor = produto.getValor();
        this.tamanho = produto.getTamanho();
        if (showImage != null && showImage) this.imagem = "data:image/png;base64," + Base64.encodeBase64String(produto.getImagem());
    }
}

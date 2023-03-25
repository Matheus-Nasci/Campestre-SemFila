package br.com.campestre.campestreapi.controllers.response;

import br.com.campestre.campestreapi.domain.entities.Produto;
import lombok.Getter;
import lombok.Setter;
import org.apache.commons.codec.binary.Base64;

import javax.persistence.Column;

@Getter
@Setter
public class ProdutoResponse {
    private Integer id;
    private String nome;
    private Double valor;
    private String tamanho;
    private String imagem;

    public ProdutoResponse(Produto produto) {
        this.id = produto.getId();
        this.nome = produto.getNome();
        this.valor = produto.getValor();
        this.tamanho = produto.getTamanho();
        this.imagem = "data:image/png;base64," + Base64.encodeBase64String(produto.getImagem());
    }

}

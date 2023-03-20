package br.com.campestre.campestreapi.domain;

import br.com.campestre.campestreapi.framework.extensions.JsonExtensions;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilaCampestrePublishRabbit {
    private String versao;
    private String acao;
    private String message;

    public FilaCampestrePublishRabbit(String versao, String acao, String message) {
        this.versao = versao;
        this.acao = acao;
        this.message = message;
    }

    public String getAsJson() {
        return JsonExtensions.serializeToJson(this);
    }
}

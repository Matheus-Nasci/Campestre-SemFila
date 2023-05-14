package br.com.campestre.campestreapi.repository.response;

import br.com.josemarinho.http.HttpRequest;
import br.com.josemarinho.http.HttpResponse;

public class EnviarNotaFiscalHttpResponse implements HttpResponse {

    private Boolean isSucces;
    private String error;

    @Override
    public HttpResponse handle(HttpRequest httpRequest, java.net.http.HttpResponse<?> httpResponse) {
        isSucces = httpResponse.statusCode() == 200;

        if (httpResponse.statusCode() != 200) {
            this.error = String.valueOf(httpResponse.previousResponse());
        }

        return this;
    }

    public Boolean getSucces() {
        return isSucces;
    }

    public String getError() {
        return error;
    }
}

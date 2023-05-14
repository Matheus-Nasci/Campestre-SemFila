package br.com.campestre.campestreapi.repository.request;

import br.com.campestre.campestreapi.domain.dto.AcompanharPedidoDto;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.josemarinho.http.HttpRequest;
import br.com.josemarinho.http.JsonHelper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;

import java.util.HashMap;

public class EnviarNotaFiscalHttpRequest extends HttpRequest {

    @Value("${backend.api-nota-fiscal.uri}")
    private String backendApiNotaFiscalUri;
    public EnviarNotaFiscalHttpRequest(AcompanharPedidoDto acompanharPedidoDto) {
        this.setHttpMethod(HttpMethod.POST);
        this.setPayload(new JsonHelper<>().serializeToJson(acompanharPedidoDto));
        this.setTimeout(5000);
        this.setStringMediaTypeMap(new HashMap<>() {{
            put("Content-Type", MediaType.APPLICATION_JSON);
        }});
        this.setUriRelative("http://localhost:5000/api/nota-nao-fiscal");
    }
}

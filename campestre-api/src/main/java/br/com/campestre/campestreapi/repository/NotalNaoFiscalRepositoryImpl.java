package br.com.campestre.campestreapi.repository;

import br.com.campestre.campestreapi.domain.dto.AcompanharPedidoDto;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.repository.request.EnviarNotaFiscalHttpRequest;
import br.com.campestre.campestreapi.repository.response.EnviarNotaFiscalHttpResponse;
import br.com.josemarinho.http.HttpConnectionImpl;
import br.com.josemarinho.http.HttpRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Repository;

import java.net.http.HttpClient;


@Repository
public class NotalNaoFiscalRepositoryImpl extends HttpRepository implements NotalNaoFiscalRepository {
    private static final Logger logger = LogManager.getLogger(NotalNaoFiscalRepositoryImpl.class);

    public NotalNaoFiscalRepositoryImpl() {
        super(new HttpConnectionImpl(HttpClient.newHttpClient()));
    }

    @Override
    public void enviar(AcompanharPedidoDto acompanharPedidoDto) throws Exception {
        var enviarNotalNaoFiscalRequest = new EnviarNotaFiscalHttpRequest(acompanharPedidoDto);
        var response = this.doRequest(enviarNotalNaoFiscalRequest, new EnviarNotaFiscalHttpResponse());

        if (response.getSucces()) logger.info("Envio de nota fiscal realizado com sucesso.");
        else logger.error("Falha ao enviar a nota fiscal. Detalhes: " + response.getError());
    }
}

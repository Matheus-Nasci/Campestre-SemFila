package br.com.campestre.campestreapi.repository;

import br.com.campestre.campestreapi.domain.dto.AcompanharPedidoDto;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;

public interface NotalNaoFiscalRepository {
    void enviar(AcompanharPedidoDto acompanharPedidoDto) throws Exception;
}

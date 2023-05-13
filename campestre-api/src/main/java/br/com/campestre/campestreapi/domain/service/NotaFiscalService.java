package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.domain.dto.PedidoDto;

public interface NotaFiscalService {
    void imprimir(PedidoDto pedidoDto);
}

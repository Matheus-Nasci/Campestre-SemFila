package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.domain.StatusPedido;

import java.util.Collection;

public interface CompraService {
    void realizar(CompraRequest compraRequest);
    Collection<ComprasDto> listar(StatusPedido statusPedido);
    void atualizarPedido(StatusPedido statusPedido, Integer numeroFicha);
}

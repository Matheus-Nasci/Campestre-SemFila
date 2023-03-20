package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.domain.dto.PedidoDto;
import br.com.campestre.campestreapi.domain.entities.Pedido;

import java.util.Collection;
import java.util.concurrent.CompletableFuture;

public interface CompraService {
    void realizar(CompraRequest compraRequest);
    Collection<ComprasDto> listar();
}

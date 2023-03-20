package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;

import java.util.concurrent.CompletableFuture;

public interface CompraService {
    void realizar(CompraRequest compraRequest);
}

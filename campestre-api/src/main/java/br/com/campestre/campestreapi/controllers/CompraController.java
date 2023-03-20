package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/compra")
public class CompraController {

    private final CompraService compraService;

    @Autowired
    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }

    @PostMapping
    public ResponseEntity realizarCompra(@RequestBody CompraRequest compraRequest) throws ExecutionException, InterruptedException {
        this.compraService.realizar(compraRequest);
        return ResponseEntity.status(201).build();
    }

}

package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.framework.SingleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public ResponseEntity listarCompras() {
        var listaCompras = this.compraService.listar();
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

}

package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.AtualizarStatusPedido;
import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.entities.StatusPedido;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.framework.SingleResponse;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/pedidos")
public class CompraController {

    private final CompraService compraService;

    @Autowired
    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }

    @PostMapping
    public ResponseEntity realizarCompra(@RequestBody CompraRequest compraRequest) {
        this.compraService.realizar(compraRequest);
        return ResponseEntity.status(201).build();
    }

    @GetMapping
    public ResponseEntity listarCompras() {
        var listaCompras = this.compraService.listar(null);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

    @GetMapping("/preparando")
    public ResponseEntity listarPedidosEmPreparo() {
        var listaCompras = this.compraService.listar(StatusPedido.PREPARANDO);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

    @GetMapping("/prontos")
    public ResponseEntity listarPedidosProntos() {
        var listaCompras = this.compraService.listar(StatusPedido.PRONTO);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

    @PutMapping()
    public ResponseEntity atualizarStatusPedido(@RequestBody AtualizarStatusPedido atualizarStatusPedido) {
        this.compraService.atualizarPedido(StatusPedido.valueOf(atualizarStatusPedido.getStatus()), atualizarStatusPedido.getNumeroFicha());
        return ResponseEntity.status(200).build();
    }

}

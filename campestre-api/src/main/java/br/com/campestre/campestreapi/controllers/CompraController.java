package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.AtualizarStatusPedido;
import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.StatusPedido;
import br.com.campestre.campestreapi.domain.dto.ComprasDto;
import br.com.campestre.campestreapi.domain.service.CompraService;
import br.com.campestre.campestreapi.framework.SingleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

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
    public ResponseEntity listarCompras(@RequestParam("showImage") Boolean showImage) {
        var listaCompras = this.compraService.listar(null, showImage);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

    @GetMapping("/preparando")
    public ResponseEntity listarPedidosEmPreparo(@RequestParam("showImage") Boolean showImage) {
        var listaCompras = this.compraService.listar(StatusPedido.PREPARANDO, showImage);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaCompras));
    }

    @GetMapping("/acompanhar")
    public ResponseEntity listarPedidosEmPreparoV2(@RequestParam("showImage") Boolean showImage) {
        var listaCompras = this.compraService.listar(StatusPedido.PREPARANDO, showImage);
        if (listaCompras.isEmpty())
            return ResponseEntity.status(204).build();

        var listaAcompanharPedidos = listaCompras.stream().map(compra -> compra.toAcompanharPedido(showImage)).collect(Collectors.toList());

        return ResponseEntity.status(200).body(new SingleResponse<>(listaAcompanharPedidos));
    }

    @GetMapping("/prontos")
    public ResponseEntity listarPedidosProntos(@RequestParam("showImage") Boolean showImage) {
        var listaCompras = this.compraService.listar(StatusPedido.PRONTO, showImage);
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

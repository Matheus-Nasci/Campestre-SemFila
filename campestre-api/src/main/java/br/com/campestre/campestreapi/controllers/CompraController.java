package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.CompraRequest;
import br.com.campestre.campestreapi.domain.entities.dto.PedidoDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import jdk.jshell.spi.ExecutionControl;
import org.hibernate.cfg.NotYetImplementedException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/compra")
public class CompraController {

    @PostMapping
    public ResponseEntity realizarCompra(@RequestBody CompraRequest compraRequest) {
        //TODO chamar o serviço que manipulará o request
        return ResponseEntity.status(201).build();
    }

}

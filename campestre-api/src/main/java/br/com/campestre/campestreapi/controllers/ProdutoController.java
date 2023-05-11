package br.com.campestre.campestreapi.controllers;

import br.com.campestre.campestreapi.controllers.requests.ProdutoRequest;
import br.com.campestre.campestreapi.domain.service.ProdutoService;
import br.com.campestre.campestreapi.framework.SingleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping
    public ResponseEntity incluirProduto(@RequestPart("produto") ProdutoRequest produtoRequest, @RequestParam("imagem") MultipartFile multipartFile) {
        return ResponseEntity.status(201).body(new SingleResponse<>(this.produtoService.incluir(produtoRequest, multipartFile).toResponse(true)));
    }

    @GetMapping("/{id}")
    public ResponseEntity obterProduto(@PathVariable Integer id) {
        var optionalProduto = this.produtoService.obter(id);

        if (optionalProduto.isEmpty())
            return ResponseEntity.status(404).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(optionalProduto.get()));
    }

    @GetMapping
    public ResponseEntity listarProdutos(@RequestParam(value = "showImage", required = false) Boolean showImage) {
        var listaProdutos = this.produtoService.listar();

        if (listaProdutos.isEmpty())
            return ResponseEntity.status(204).build();

        return ResponseEntity.status(200).body(new SingleResponse<>(listaProdutos.stream().map(produto -> produto.toResponse(showImage)).collect(Collectors.toList())));
    }
}

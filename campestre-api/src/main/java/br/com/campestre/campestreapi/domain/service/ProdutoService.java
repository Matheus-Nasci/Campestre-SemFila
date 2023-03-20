package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.controllers.requests.ProdutoRequest;
import br.com.campestre.campestreapi.domain.dto.ProdutoDto;
import br.com.campestre.campestreapi.domain.entities.Produto;

import java.util.Collection;
import java.util.Optional;

public interface ProdutoService {
    Produto incluir(ProdutoRequest produtoRequest);
    Optional<Produto> obter(Integer idProduto);
    Collection<Produto> listar();
}

package br.com.campestre.campestreapi.domain.service;

import br.com.campestre.campestreapi.controllers.requests.ProdutoRequest;
import br.com.campestre.campestreapi.domain.entities.Produto;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.Optional;

public interface ProdutoService {
    Produto incluir(ProdutoRequest produtoRequest, MultipartFile multipartFile);
    Optional<Produto> obter(Integer idProduto);
    Collection<Produto> listar();
}

package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.controllers.requests.ProdutoRequest;
import br.com.campestre.campestreapi.domain.entities.Produto;
import br.com.campestre.campestreapi.domain.repository.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProdutoServiceImpl implements br.com.campestre.campestreapi.domain.service.ProdutoService {

    private final ProdutoRepositorio produtoRepositorio;

    @Autowired
    public ProdutoServiceImpl(ProdutoRepositorio produtoRepositorio) {
        this.produtoRepositorio = produtoRepositorio;
    }

    @Override
    public Produto incluir(ProdutoRequest produtoRequest) {
        var product = this.produtoRepositorio.save(produtoRequest.toDomain());
        return product;
    }

    @Override
    public Optional<Produto> obter(Integer idProduto) {
        return this.produtoRepositorio.findById(idProduto);
    }

    @Override
    public Collection<Produto> listar() {
        return this.produtoRepositorio.findAll();
    }
}

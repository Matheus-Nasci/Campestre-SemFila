package br.com.campestre.campestreapi.service;

import br.com.campestre.campestreapi.controllers.requests.ProdutoRequest;
import br.com.campestre.campestreapi.domain.entities.Produto;
import br.com.campestre.campestreapi.domain.repository.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public Produto incluir(ProdutoRequest produtoRequest, MultipartFile multipartFile) {
        var productDomain = produtoRequest.toDomain();
        try {
            productDomain.setImagem(multipartFile.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return this.produtoRepositorio.save(productDomain);
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

package br.com.campestre.campestreapi.domain.repository;

import br.com.campestre.campestreapi.domain.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface ProdutoRepositorio extends JpaRepository<Produto, Integer> {

}

package br.com.campestre.campestreapi.domain.repository;

import br.com.campestre.campestreapi.domain.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepositorio extends JpaRepository<Produto, Integer> {
}

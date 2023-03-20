package br.com.campestre.campestreapi.domain.repository;

import br.com.campestre.campestreapi.domain.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepositorio extends JpaRepository<Pedido, Integer> {
}

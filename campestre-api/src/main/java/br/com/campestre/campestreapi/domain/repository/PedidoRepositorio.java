package br.com.campestre.campestreapi.domain.repository;

import br.com.campestre.campestreapi.domain.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface PedidoRepositorio extends JpaRepository<Pedido, Integer> {
    Pedido getTopByOrderByIdDesc();
    @Query("SELECT DISTINCT p.numeroFicha FROM Pedido p")
    Collection<Integer> obterNumerosFichas();
    Collection<Pedido> findAllByNumeroFicha(Integer numeroFicha);
}

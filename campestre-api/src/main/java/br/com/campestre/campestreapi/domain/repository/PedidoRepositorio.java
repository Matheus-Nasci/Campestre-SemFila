package br.com.campestre.campestreapi.domain.repository;

import br.com.campestre.campestreapi.domain.entities.Pedido;
import br.com.campestre.campestreapi.domain.entities.StatusPedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Collection;

@Transactional
public interface PedidoRepositorio extends JpaRepository<Pedido, Integer> {
    Pedido getTopByOrderByIdDesc();
    @Query("SELECT DISTINCT p.numeroFicha FROM Pedido p")
    Collection<Integer> obterNumerosFichas();
    Collection<Pedido> findAllByNumeroFicha(Integer numeroFicha);
    @Query("SELECT DISTINCT p.numeroFicha FROM Pedido p where p.statusPedido = :statusPedido")
    Collection<Integer> obterNumerosFichasPreparando(@Param("statusPedido")StatusPedido statusPedido);

    @Modifying
    @Query("UPDATE Pedido pedido set pedido.statusPedido = :statusPedido where pedido.numeroFicha = :numeroFicha")
    void atualizarStatusPedidoPeloNumeroFicha(@Param("statusPedido") StatusPedido statusPedido, @Param("numeroFicha") Integer numeroFicha);
}

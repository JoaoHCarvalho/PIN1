package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
    List<Pedido> findByUserId(int id);
}

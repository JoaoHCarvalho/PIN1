package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.CarrinhoCompra;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarrinhoCompraRepository extends JpaRepository<CarrinhoCompra, Integer> {
    List<CarrinhoCompra> findByUserId(int id);
}

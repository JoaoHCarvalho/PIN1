package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
}

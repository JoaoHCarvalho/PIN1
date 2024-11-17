package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    List<Produto> findByCategoria(int categoria);
    Produto findByDescricao(String descricao);
}

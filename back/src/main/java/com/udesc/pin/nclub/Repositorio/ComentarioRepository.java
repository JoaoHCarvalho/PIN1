package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {
    List<Comentario> findBycodigoProd(int prodId);
}

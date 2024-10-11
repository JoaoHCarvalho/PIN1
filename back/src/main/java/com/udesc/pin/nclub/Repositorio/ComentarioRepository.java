package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComentarioRepository extends JpaRepository<Comentario, Integer> {
}

package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}

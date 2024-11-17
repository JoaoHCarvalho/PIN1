package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.EnderecoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnderecoUsuarioRepository extends JpaRepository<EnderecoUsuario, Integer> {
    List<EnderecoUsuario> findByUserId(int id);
}

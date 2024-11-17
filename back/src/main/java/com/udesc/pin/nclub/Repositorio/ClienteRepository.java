package com.udesc.pin.nclub.Repositorio;

import com.udesc.pin.nclub.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    Cliente findByEmail(String email);
    Cliente findByStatus(int status);
}

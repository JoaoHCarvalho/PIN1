package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.FormaEntregaRepository;
import com.udesc.pin.nclub.model.FormaEntrega;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/entrega")
public class EntregaController {
    @Autowired
    private FormaEntregaRepository formaEntregaRepository;

    @PostMapping("/create")
    public ResponseEntity<FormaEntrega> createEntrega(@Valid @RequestBody FormaEntrega formaEntrega) {
        FormaEntrega savedEntrega = formaEntregaRepository.save(formaEntrega);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedEntrega.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

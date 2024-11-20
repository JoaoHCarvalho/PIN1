package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.PromocaoRepository;
import com.udesc.pin.nclub.model.Promocao;
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
@RequestMapping("/promocao")
public class PromocaoController {
    @Autowired
    private PromocaoRepository promocaoRepository;

    @PostMapping("/create")
    public ResponseEntity<Promocao> createPromocao(@Valid @RequestBody Promocao promocao) {
        Promocao savedPromocao = promocaoRepository.save(promocao);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedPromocao.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

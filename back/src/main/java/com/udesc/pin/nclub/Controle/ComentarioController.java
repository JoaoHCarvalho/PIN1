package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ComentarioRepository;
import com.udesc.pin.nclub.model.Comentario;
import com.udesc.pin.nclub.model.Usuario;
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
@RequestMapping("/comentario")
public class ComentarioController {
    @Autowired
    private ComentarioRepository comentarioRepository;

    @PostMapping("/create")
    public ResponseEntity<Comentario> createComentario(@Valid @RequestBody Comentario comentario){
        Comentario savedComentario = comentarioRepository.save(comentario);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedComentario.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

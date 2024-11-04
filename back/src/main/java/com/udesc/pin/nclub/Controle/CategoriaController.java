package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.CategoriaRepository;
import com.udesc.pin.nclub.model.Categoria;
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
@RequestMapping("/categoria")
public class CategoriaController {
    @Autowired
    private CategoriaRepository categoriaRepository;

    @PostMapping("/create")
    public ResponseEntity<Categoria> createCategoria(@Valid @RequestBody Categoria categoria){
        Categoria savedCategoria = categoriaRepository.save(categoria);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCategoria.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

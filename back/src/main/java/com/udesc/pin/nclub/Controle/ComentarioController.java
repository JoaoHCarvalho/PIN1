package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ComentarioRepository;
import com.udesc.pin.nclub.model.Cliente;
import com.udesc.pin.nclub.model.Comentario;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/all/{prodId}")
    public List<Comentario> getAllByprodId(@PathVariable int prodId){
        List<Comentario> temp= new ArrayList<>();
        comentarioRepository.findBycodigoProd(prodId).forEach(comentario -> {
            Comentario comentario1 = comentario;
            Cliente cliente = new Cliente();
            cliente.setNome(comentario1.getCliente().getNome());
            comentario1.setCliente(cliente);
            temp.add(comentario1);
        });
        return temp;
    }
}

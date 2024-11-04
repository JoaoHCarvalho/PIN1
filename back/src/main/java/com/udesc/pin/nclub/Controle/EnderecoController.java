package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.EnderecoUsuarioRepository;
import com.udesc.pin.nclub.model.EnderecoUsuario;
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
@RequestMapping("/endereco")
public class EnderecoController {
    @Autowired
    private EnderecoUsuarioRepository enderecoUsuarioRepository;

    @PostMapping("/create")
    public ResponseEntity<EnderecoUsuario> createEndereco(@Valid @RequestBody EnderecoUsuario enderecoUsuario){
        EnderecoUsuario savedEndereco = enderecoUsuarioRepository.save(enderecoUsuario);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedEndereco.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }

}

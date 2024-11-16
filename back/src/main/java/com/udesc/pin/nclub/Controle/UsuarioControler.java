package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ClienteRepository;
import com.udesc.pin.nclub.Repositorio.UsuarioRepository;
import com.udesc.pin.nclub.model.Cliente;
import com.udesc.pin.nclub.model.Usuario;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;


/*DROP SCHEMA public CASCADE;
CREATE SCHEMA public;*/
@RestController
@RequestMapping("/usuario")
public class UsuarioControler {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping("/create")
    public ResponseEntity<Cliente> createUsuario(@Valid @RequestBody Cliente cliente){
        Cliente savedCliente = clienteRepository.save(cliente);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCliente.getUsuarioId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/cliente/{id}")
    public Cliente getClienteById(@PathVariable int id){
        return clienteRepository.findById(id).get();
    }
    @GetMapping("/email/{email}")
    public Cliente getClienteByEmail(@PathVariable String email){
        Cliente temp =clienteRepository.findByEmail(email);
        temp.setComentarios(null);
        temp.setEnderecos(null);
        return temp;
    }
}

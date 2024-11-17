package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ClienteRepository;
import com.udesc.pin.nclub.Repositorio.UsuarioRepository;
import com.udesc.pin.nclub.model.Cliente;
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
    @PutMapping("/{id}")
    public Cliente atualizarCliente(@PathVariable Integer id, @RequestBody Cliente clienteAtualizado) {
        Cliente cliente = clienteRepository.findById(id).get();
        cliente.setNome(clienteAtualizado.getNome());
        cliente.setEmail(clienteAtualizado.getEmail());
        cliente.setCpf(clienteAtualizado.getCpf());
        cliente.setDataNascimento(clienteAtualizado.getDataNascimento());
        cliente.setTelefone(clienteAtualizado.getTelefone());
        if (clienteAtualizado.getSenha() != null && !clienteAtualizado.getSenha().isEmpty()) {
            cliente.setSenha(clienteAtualizado.getSenha());
        }
        return clienteRepository.save(cliente);
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
    @GetMapping("/status")
    public Cliente getLogin(){
        Cliente temp = clienteRepository.findByStatus(1);
        temp.setEnderecos(null);
        temp.setComentarios(null);
        return temp;
    }
    @GetMapping("/logon/{id}")
    public Cliente logonCliente(@PathVariable int id){
        Cliente temp = clienteRepository.findById(id).get();
        temp.setStatus(1);
        clienteRepository.save(temp);
        return temp;
    }
    @GetMapping("/logoff/{id}")
    public Cliente logoffCliente(@PathVariable int id){
        Cliente temp = clienteRepository.findById(id).get();
        temp.setStatus(0);
        clienteRepository.save(temp);
        return temp;
    }
}

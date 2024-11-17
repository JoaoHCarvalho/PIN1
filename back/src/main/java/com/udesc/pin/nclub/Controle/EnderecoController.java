package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.EnderecoUsuarioRepository;
import com.udesc.pin.nclub.model.Cliente;
import com.udesc.pin.nclub.model.EnderecoUsuario;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

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
    @PutMapping("/update/{id}")
    public EnderecoUsuario atualizarCliente(@PathVariable Integer id, @RequestBody EnderecoUsuario enderecoAtualizado) {
        EnderecoUsuario enderecoUsuario = enderecoUsuarioRepository.findById(id).get();
        enderecoUsuario.setCep(enderecoAtualizado.getCep());
        enderecoUsuario.setNumero(enderecoAtualizado.getNumero());
        enderecoUsuario.setRua(enderecoAtualizado.getRua());
        enderecoUsuario.setBairro(enderecoAtualizado.getBairro());
        enderecoUsuario.setCidade(enderecoAtualizado.getCidade());
        enderecoUsuario.setEstado(enderecoAtualizado.getEstado());
        return enderecoUsuarioRepository.save(enderecoUsuario);
    }
    @GetMapping("/{id}")
    public EnderecoUsuario findByCliente(@PathVariable int id){
        return enderecoUsuarioRepository.findById(id).get();
    }
    @GetMapping("/all/{id}")
    public List<EnderecoUsuario> findByAllCliente(@PathVariable int id){
        return enderecoUsuarioRepository.findByUserId(id);
    }
    @DeleteMapping("/delete/{id}")
    public EnderecoUsuario deleteById(@PathVariable int id){
        EnderecoUsuario temp = enderecoUsuarioRepository.findById(id).get();
        enderecoUsuarioRepository.deleteById(id);
        return temp;
    }
}

package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ProdutoRepository;
import com.udesc.pin.nclub.model.Produto;
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
@RequestMapping("/produto")
public class ProdutoController {
    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping("/create")
    public ResponseEntity<Produto> createProduto(@Valid @RequestBody Produto produto){
        Produto savedProduto = produtoRepository.save(produto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedProduto.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

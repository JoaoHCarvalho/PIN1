package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ItemProdutoRepository;
import com.udesc.pin.nclub.model.EnderecoUsuario;
import com.udesc.pin.nclub.model.ItemProduto;
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
@RequestMapping("/item")
public class ItemController {
    @Autowired
    private ItemProdutoRepository itemProdutoRepository;

    @PostMapping("/create")
    public ResponseEntity<ItemProduto> createItem(@Valid @RequestBody ItemProduto itemProduto) {
        ItemProduto savedItem = itemProdutoRepository.save(itemProduto);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedItem.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

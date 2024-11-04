package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.CarrinhoCompraRepository;
import com.udesc.pin.nclub.model.CarrinhoCompra;
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
@RequestMapping("/carrinho")
public class CarrinhoCompraController {
    @Autowired
    private CarrinhoCompraRepository carrinhoCompraRepository;

    @PostMapping("/create")
    public ResponseEntity<CarrinhoCompra> createCarrinho(@Valid @RequestBody CarrinhoCompra carrinhoCompra){
        CarrinhoCompra savedCarrinho = carrinhoCompraRepository.save(carrinhoCompra);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCarrinho.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

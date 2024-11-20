package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.CarrinhoCompraRepository;
import com.udesc.pin.nclub.model.CarrinhoCompra;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoCompraController {
    @Autowired
    private CarrinhoCompraRepository carrinhoCompraRepository;

    @PostMapping("/adicionar")
    public ResponseEntity<CarrinhoCompra> createCarrinho(@Valid @RequestBody CarrinhoCompra carrinhoCompra){
        CarrinhoCompra savedCarrinho = carrinhoCompraRepository.save(carrinhoCompra);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCarrinho.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/user/{id}")
    public List<CarrinhoCompra> findByUser(@PathVariable int id){
        return carrinhoCompraRepository.findByUserId(id);
    }
    @DeleteMapping("/delete")
    public int deleteAll(){
        carrinhoCompraRepository.deleteAll();
        return 1;
    }
}

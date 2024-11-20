package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.PedidoRepository;
import com.udesc.pin.nclub.model.Pedido;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {
    @Autowired
    private PedidoRepository pedidoRepository;

    @PostMapping("/create")
    public ResponseEntity<Pedido> createPedido(@Valid @RequestBody Pedido pedido) {
        Pedido savedPedido = pedidoRepository.save(pedido);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedPedido.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @GetMapping("/all/{id}")
    public List<Pedido> findAllById(@PathVariable int id){
        return pedidoRepository.findByUserId(id);
    }
}

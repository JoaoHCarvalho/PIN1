package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.FormaPagamentoRepository;
import com.udesc.pin.nclub.model.EnderecoUsuario;
import com.udesc.pin.nclub.model.FormaPagamento;
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
@RequestMapping("/pagamento")
public class PagamentoController {
    @Autowired
    private FormaPagamentoRepository formaPagamentoRepository;

    @PostMapping("/create")
    public ResponseEntity<FormaPagamento> createPagamento(@Valid @RequestBody FormaPagamento formaPagamento) {
        FormaPagamento savedPagamento = formaPagamentoRepository.save(formaPagamento);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedPagamento.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

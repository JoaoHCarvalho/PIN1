package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.DadosCartaoRepository;
import com.udesc.pin.nclub.model.DadosCartao;
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
@RequestMapping("/cartao")
public class CartaoController {
    @Autowired
    private DadosCartaoRepository dadosCartaoRepository;

    @PostMapping("/create")
    public ResponseEntity<DadosCartao> createCartao(@Valid @RequestBody DadosCartao dadosCartao){
        DadosCartao savedCartao = dadosCartaoRepository.save(dadosCartao);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedCartao.getCodigo())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}

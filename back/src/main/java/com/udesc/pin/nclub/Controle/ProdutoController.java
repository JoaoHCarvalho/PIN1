package com.udesc.pin.nclub.Controle;

import com.udesc.pin.nclub.Repositorio.ProdutoRepository;
import com.udesc.pin.nclub.model.Produto;
import com.udesc.pin.nclub.model.Promocao;
import com.udesc.pin.nclub.model.Usuario;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/tipo/{tipo}")
    public List<Produto> findAll(@PathVariable int tipo){
        List<Produto> temp = new ArrayList<>();
        produtoRepository.findByCategoria(tipo).forEach(produto -> {
            if(produto.getPromocao() != null){
                Produto temp1=produto;
                temp1.setPreco(temp1.getPreco()-(temp1.getPreco()*(temp1.getPromocao().getPercentual()/100)));
                temp1.setPromocao(null);
                temp.add(temp1);
            }else {
                temp.add(produto);
            }
        });
        return temp;
    }
    @GetMapping("/{id}")
    public Produto findById(@PathVariable int id){
        Produto temp = produtoRepository.findById(id).get();
        if(temp.getPromocao() != null) {
            temp.setPreco(temp.getPreco() - (temp.getPreco() * (temp.getPromocao().getPercentual() / 100)));
            temp.setPromocao(null);
        }
        return temp;
    }
    @GetMapping("/all")
    public List<Produto> findAll(){
        List<Produto> produtoList = produtoRepository.findAll();
        List<Produto> temp = new ArrayList<>();
        produtoList.forEach(produto -> {
            Produto prod=produto;
            if(prod.getPromocao()!=null) {
                float prc = prod.getPreco() - (prod.getPreco() * (prod.getPromocao().getPercentual() / 100));
                prod.setPromocao(new Promocao());
                prod.setPreco(prc);
            }
            temp.add(prod);
        });
        return temp;
    }
}

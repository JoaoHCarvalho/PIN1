package com.udesc.pin.nclub.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class CarrinhoCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @OneToMany(mappedBy = "carrinho")
    private List<ItemProduto> itens;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public List<ItemProduto> getItens() {
        return itens;
    }

    public void setItens(List<ItemProduto> itens) {
        this.itens = itens;
    }
}

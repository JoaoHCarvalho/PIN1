package com.udesc.pin.nclub.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class CarrinhoCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @OneToMany
    private List<ItemProduto> itensProduto;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public List<ItemProduto> getItensProduto() {
        return itensProduto;
    }

    public void setItensProduto(List<ItemProduto> itensProduto) {
        this.itensProduto = itensProduto;
    }
}

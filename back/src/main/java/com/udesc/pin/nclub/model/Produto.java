package com.udesc.pin.nclub.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    private float preco;
    private String descricao;

    @ManyToOne
    private Categoria categoria;

    @OneToMany(mappedBy = "produto")
    private List<ItemProduto> itensProduto;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<ItemProduto> getItensProduto() {
        return itensProduto;
    }

    public void setItensProduto(List<ItemProduto> itensProduto) {
        this.itensProduto = itensProduto;
    }
}

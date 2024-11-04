package com.udesc.pin.nclub.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class ItemProduto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    @Temporal(TemporalType.DATE)
    private Date dataRecebimento;

    private char status;

    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;

    @ManyToOne
    @JoinColumn(name = "carrinho_id")
    private CarrinhoCompra carrinho;

    public CarrinhoCompra getCarrinho() {
        return carrinho;
    }

    public void setCarrinho(CarrinhoCompra carrinho) {
        this.carrinho = carrinho;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public Date getDataRecebimento() {
        return dataRecebimento;
    }

    public void setDataRecebimento(Date dataRecebimento) {
        this.dataRecebimento = dataRecebimento;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
}

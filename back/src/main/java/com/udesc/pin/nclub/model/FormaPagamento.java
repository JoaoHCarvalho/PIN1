package com.udesc.pin.nclub.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class FormaPagamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codigo;

    private String descricao;
    private char status;
    private String tipo;

    @OneToMany(mappedBy = "formaPagamento")
    private List<Pedido> pedidos;

    @OneToOne
    private DadosCartao dadosCartao;

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }

    public DadosCartao getDadosCartao() {
        return dadosCartao;
    }

    public void setDadosCartao(DadosCartao dadosCartao) {
        this.dadosCartao = dadosCartao;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public char getStatus() {
        return status;
    }

    public void setStatus(char status) {
        this.status = status;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

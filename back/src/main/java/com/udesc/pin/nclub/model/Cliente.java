package com.udesc.pin.nclub.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;
import java.util.List;

@Entity
public class Cliente extends Usuario{
    private String nome;

    @Temporal(TemporalType.DATE)
    private Date dataNascimento;
    private String telefone;

    @OneToMany(mappedBy = "cliente")
    private List<EnderecoUsuario> enderecos;

    @OneToMany(mappedBy = "cliente")
    private List<Comentario> comentarios;

    public List<Comentario> getComentarios() {
        return comentarios;
    }

    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public List<EnderecoUsuario> getEnderecos() {
        return enderecos;
    }

    public void setEnderecos(List<EnderecoUsuario> enderecos) {
        this.enderecos = enderecos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}

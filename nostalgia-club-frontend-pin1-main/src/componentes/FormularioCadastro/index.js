import React, { useState } from 'react';
import CamposLogin from '../CamposLogin';
import TituloAcesso from '../TituloAcesso';
import './FormularioCadastro.css';

const FormularioCadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        const cliente = {
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            data_nascimento: "",
            cpf: "",
            telefone: "",
            status: 1
        };

        try {
            const response = await fetch('http://localhost:8080/usuario/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cliente),
            });

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
                setFormData({ nome: '', email: '', senha: '', confirmarSenha: '' }); 
            } else {
                const error = await response.json();
                alert(`Erro ao cadastrar: ${error.message}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Ocorreu um erro ao realizar o cadastro. Tente novamente.');
        }
    };

    const campos = [
        { label: 'Nome completo', type: 'text', name: 'nome' },
        { label: 'E-mail', type: 'text', name: 'email' },
        { label: 'Senha', type: 'password', name: 'senha' },
        { label: 'Confirme a senha', type: 'password', name: 'confirmarSenha' },
    ];

    const acessarLogin = {
        texto: 'Já possui uma conta?',
        tituloLink: 'Log-in',
        link: 'http://localhost:3000/?',
    };

    return (
        <div className="container-cadastro">
            <section className="formulario-cadastro">
                <div className="formulario-cadastro__capa"></div>
                <div className="formulario-cadastro__campos">
                    <TituloAcesso titulo="Crie a sua conta" subtitulo="Insira seus detalhes abaixo" />
                    <div className="formulario-cadastro__campos__itens">
                        <CamposLogin
                            campos={campos}
                            rodape={acessarLogin}
                            formData={formData}
                            onInputChange={handleInputChange}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormularioCadastro;

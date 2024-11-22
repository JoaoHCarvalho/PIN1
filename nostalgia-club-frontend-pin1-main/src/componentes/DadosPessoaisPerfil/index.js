import React, { useEffect, useState } from 'react';
import BotaoPadrao from '../BotaoPadrao';
import CampoPadrao from '../CampoPadrao';
import './DadosPessoaisPerfil.css';

const DadosPessoaisPerfil = () => {
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        senha: '',
        confirmarSenha: '',
    });

    const [usuarioId, setUsuarioId] = useState(null);

    useEffect(() => {
        const fetchCliente = async () => {
            try {
                // Buscar o status do usuário pelo endpoint /usuario/status
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) throw new Error('Erro ao buscar status do usuário');
                const statusData = await responseStatus.json();
                setUsuarioId(statusData.usuarioId);

                // Preencher os dados do cliente com a resposta do status
                setCliente({
                    nome: statusData.nome,
                    email: statusData.email,
                    cpf: statusData.cpf,
                    dataNascimento: statusData.dataNascimento || '',
                    telefone: statusData.telefone || '',
                    senha: '',
                    confirmarSenha: '',
                });
            } catch (error) {
                console.error('Erro ao carregar cliente:', error);
            }
        };

        fetchCliente();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cliente.senha !== cliente.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            // Enviar update do cliente
            const response = await fetch(`http://localhost:8080/usuario/${usuarioId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: cliente.nome,
                    email: cliente.email,
                    cpf: cliente.cpf,
                    dataNascimento: cliente.dataNascimento,
                    telefone: cliente.telefone,
                    senha: cliente.senha || undefined, // Apenas envia a senha se não estiver vazia
                }),
            });

            if (!response.ok) throw new Error('Erro ao atualizar cliente');
            alert('Informações atualizadas com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            alert('Erro ao atualizar informações. Tente novamente.');
        }
    };

    const handleLogoff = async (e) => {
        e.preventDefault(); // Evitar comportamento padrão do botão no formulário

        try {
            // Realizar o logoff do usuário
            const response = await fetch(`http://localhost:8080/usuario/logoff/${usuarioId}`, {
                method: 'GET',
            });

            if (!response.ok) throw new Error('Erro ao realizar logoff');

            alert('Logoff realizado com sucesso!');
            // Redirecionar para a página inicial
            window.location.href = '/';
        } catch (error) {
            console.error('Erro ao realizar logoff:', error);
            alert('Erro ao realizar logoff. Tente novamente.');
        }
    };

    return (
        <section className="dados-pessoais-perfil">
            <h2>Informações Pessoais</h2>
            <form className="dados-pessoais-perfil__form" onSubmit={handleSubmit}>
                <CampoPadrao
                    tamanho="w-100"
                    type="text"
                    label="Nome completo"
                    name="nome"
                    value={cliente.nome}
                    onChange={handleInputChange}
                    required={true}
                />
                <CampoPadrao
                    tamanho="w-100"
                    type="text"
                    label="E-mail"
                    name="email"
                    value={cliente.email}
                    onChange={handleInputChange}
                    required={true}
                />
                <div className="agrupador">
                    <CampoPadrao
                        tamanho="w-49"
                        type="text"
                        label="CPF"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleInputChange}
                        required={true}
                    />
                    <CampoPadrao
                        tamanho="w-49"
                        type="date"
                        label="Data de Nascimento"
                        name="dataNascimento"
                        value={cliente.dataNascimento}
                        onChange={handleInputChange}
                        required={true}
                    />
                </div>
                <CampoPadrao
                    tamanho="w-100"
                    type="text"
                    label="Telefone"
                    name="telefone"
                    value={cliente.telefone}
                    onChange={handleInputChange}
                    required={true}
                />
                <CampoPadrao
                    tamanho="w-100"
                    type="password"
                    label="Alterar Senha"
                    name="senha"
                    value={cliente.senha}
                    onChange={handleInputChange}
                    required={false}
                />
                <CampoPadrao
                    tamanho="w-100"
                    type="password"
                    label="Confirmar Senha"
                    name="confirmarSenha"
                    value={cliente.confirmarSenha}
                    onChange={handleInputChange}
                    required={false}
                />
                <div className="dados-pessoais-perfil__form__botoes">
                    <BotaoPadrao
                        titulo="Logoff"
                        tamanho="w-49"
                        onClick={handleLogoff}
                        type="button"
                    />
                    <BotaoPadrao titulo="Confirmar" tamanho="w-49" type="submit" />
                </div>
            </form>
        </section>
    );
};

export default DadosPessoaisPerfil;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CamposLogin from '../CamposLogin';
import TituloAcesso from '../TituloAcesso';
import './FormularioLogin.css';
import axios from 'axios';

const FormularioLogin = () => {
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const campos = [
        { name: 'email', label: 'E-mail', type: 'text' },
        { name: 'senha', label: 'Senha', type: 'password' },
    ];

    const acessarCadastro = {
        texto: 'Ainda não possui uma conta?',
        tituloLink: 'Cadastre-se',
        link: 'http://localhost:3000/cadastro',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.get(`http://localhost:8080/usuario/email/${formData.email}`);
            const usuario = response.data;

            if (usuario.senha === formData.senha) {
                const bruh = await axios.get(`http://localhost:8080/usuario/logon/${usuario.usuarioId}`);
                console.log({ bruh })
                navigate('/home')
            } else {
                setError('Senha inválida. Tente novamente.');
            }
        } catch (err) {
            setError('Usuário não encontrado ou erro no servidor.');
        }
    };

    return (
        <div className="container-login">
            <section className="formulario-login">
                <div className="formulario-login__capa"></div>
                <div className="formulario-login__campos">
                    <TituloAcesso titulo="Faça Log-in" subtitulo="Insira seus detalhes abaixo" />
                    <div className="formulario-login__campos__itens">
                        {error && <p className="error-message">{error}</p>}
                        <CamposLogin
                            campos={campos}
                            rodape={acessarCadastro}
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

export default FormularioLogin;

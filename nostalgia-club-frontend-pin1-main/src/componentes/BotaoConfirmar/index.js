import { useNavigate } from 'react-router-dom';
import './BotaoConfirmar.css'
import React from 'react';
//import { useAuth } from '../AuthContext'; // Importa o contexto de autenticação

const BotaoConfirmar = (props) => {
    const navigate = useNavigate();
    //const { userId } = useAuth(); // Obtém o user_id do contexto

    const handleAddToCart = () => {
        fetch(`http://localhost:8080/carrinho/adicionar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1, // Inclui o user_id no corpo da requisição
                produtoCodigo: props.produtoCodigo,
                quantidade: props.quantidade
            })
        })
        .then(response => {
            if (response.ok) {
                navigate('/meucarrinho');
            } else {
                console.error("Erro ao adicionar ao carrinho:", response.statusText);
            }
        })
        .catch(error => console.error("Erro ao adicionar ao carrinho:", error));
    };

    return (
        <button className="botao-confirmar" onClick={handleAddToCart}>
            CONFIRMAR
        </button>
    );
};

export default BotaoConfirmar;


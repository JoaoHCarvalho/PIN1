import { useNavigate } from 'react-router-dom';
import './BotaoConfirmar.css';
import React from 'react';

const BotaoConfirmar = (props) => {
    const navigate = useNavigate();

    const handleAddToCart = async () => {
        try {
            const statusResponse = await fetch('http://localhost:8080/usuario/status');
            if (!statusResponse.ok) {
                console.error("Erro ao obter status do usuário:", statusResponse.statusText);
                return;
            }

            const statusData = await statusResponse.json();
            const usuarioId = statusData.usuarioId;

            const addToCartResponse = await fetch('http://localhost:8080/carrinho/adicionar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: usuarioId, 
                    produtoCodigo: props.produtoCodigo,
                    quantidade: props.quantidade,
                }),
            });

            if (addToCartResponse.ok) {
                navigate('/meucarrinho'); 
            } else {
                console.error(
                    "Erro ao adicionar ao carrinho:",
                    addToCartResponse.statusText
                );
            }
        } catch (error) {
            console.error("Erro ao adicionar ao carrinho:", error);
        }
    };

    return (
        <button className="botao-confirmar" onClick={handleAddToCart}>
            CONFIRMAR
        </button>
    );
};

export default BotaoConfirmar;

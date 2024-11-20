import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraPesquisa.css';

const BarraPesquisa = (props) => {
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!nome.trim()) {
            alert('Por favor, insira um nome para pesquisar.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/produto/nome/${nome}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar o produto.');
            }

            const produto = await response.json();

            if (produto?.codigo) {
                // Redirecionar para a página de detalhes do produto
                navigate(`/detalhes-produto/${produto.codigo}`);
            } else {
                alert('Produto não encontrado.');
            }
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            alert('Não foi possível buscar o produto. Tente novamente.');
        }
    };

    return (
        <div className="box-pesquisa" style={{ width: props.width }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabled
                />
            </form>
        </div>
    );
};

export default BarraPesquisa;

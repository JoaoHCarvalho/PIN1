import './BotaoQuantidadeCompra.css'
import React from 'react';

const BotaoQuantidadeCompra = ({ quantidade, setQuantidade }) => {
    const incrementarQuantidade = () => setQuantidade(prev => prev + 1);
    const decrementarQuantidade = () => setQuantidade(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="botao-quantidade-compra">
            <button onClick={decrementarQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={incrementarQuantidade}>+</button>
        </div>
    );
};

export default BotaoQuantidadeCompra;
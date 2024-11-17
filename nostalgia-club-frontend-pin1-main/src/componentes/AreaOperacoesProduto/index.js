import CampoFrete from '../CampoFrete'
import BotaoQuantidadeCompra from '../BotaoQuantidadeCompra'
import BotaoConfirmar from '../BotaoConfirmar'
import './AreaOperacoesProduto.css'
import React, { useState } from 'react';

const AreaOperacoesProduto = (props) => {
    const [quantidade, setQuantidade] = useState(1);

    return (
        <div className="area-operacoes-produto">
            <div className="botoes-compra">
                <BotaoQuantidadeCompra quantidade={quantidade} setQuantidade={setQuantidade} />
                <BotaoConfirmar quantidade={quantidade} produtoCodigo={props.produtoCodigo} />
            </div>
            <CampoFrete />
            <span className="info-prazo">Prazo: 6 a 10 dias úteis</span>
        </div>
    );
};

export default AreaOperacoesProduto;

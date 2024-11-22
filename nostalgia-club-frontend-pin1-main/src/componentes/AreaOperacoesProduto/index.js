import CampoFrete from '../CampoFrete'
import BotaoQuantidadeCompra from '../BotaoQuantidadeCompra'
import BotaoConfirmar from '../BotaoConfirmar'
import './AreaOperacoesProduto.css'
import React, { useState } from 'react'
import Hint from '../Hint'

const AreaOperacoesProduto = (props) => {
    const [quantidade, setQuantidade] = useState(1);

    return (
        <div className="area-operacoes-produto">
            <div className="botoes-compra">
                <BotaoQuantidadeCompra quantidade={quantidade} setQuantidade={setQuantidade} />
                <BotaoConfirmar quantidade={quantidade} produtoCodigo={props.produtoCodigo} />
            </div>
            <div className="area-frete">
                <Hint mensagem="O preço do frete deste produto é fixo (não é calculado com base no CEP)." />
                <CampoFrete />
            </div>
            <span className="info-prazo">Prazo: 6 a 10 dias úteis</span>
        </div>
    );
};

export default AreaOperacoesProduto;

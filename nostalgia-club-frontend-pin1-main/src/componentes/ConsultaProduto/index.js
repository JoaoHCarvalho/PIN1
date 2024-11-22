import CabecalhoConsultaProduto from '../CabecalhoConsultaProduto'
import DetalhesConsultaProdutos from '../DetalhesConsultaProduto'
import GaleriaFotosProduto from '../GaleriaFotosProduto'
import './ConsultaProduto.css'
const ConsultaProduto = (props) => {
    console.log(props)
    return (
        <div className="consulta-produto">
            <CabecalhoConsultaProduto tipoProduto="Disco" nomeProduto={props.infoProduto.descricao} />
            <div className="consulta-produto__detalhes">
                <GaleriaFotosProduto miniatura={props.infoProduto.imagem} />
                <DetalhesConsultaProdutos preco={props.infoProduto.preco} descricao={props.infoProduto.descricao} codigoProduto={props.codigoProduto}/>
            </div>
        </div>
    )
}

export default ConsultaProduto
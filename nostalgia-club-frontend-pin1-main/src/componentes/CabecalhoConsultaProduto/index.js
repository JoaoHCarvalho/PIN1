import './CabecalhoConsultaProduto.css'

const CabecalhoConsultaProduto = (props) => {
    return (
        <div className="cabecalho-consulta-produto">
            <span>{props.tipoProduto}</span>
            <h2>{props.nomeProduto}</h2>
        </div>
    )
}

export default CabecalhoConsultaProduto
import './EspecificacaoProduto.css'

const EspecificacaoProduto = (props) => {
    return (
        <div className="especificacao-produto">
            <h3>{props.preco}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}

export default EspecificacaoProduto
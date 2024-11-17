import CardProduto from '../CardProduto';
import './CategoriaProdutos.css'

const CategoriaProdutos = (props) => {
    return (
        <div className="categoria-produtos">
            <h2>{props.tituloCategoria}</h2>
            <div className="categoria-produtos__itens">
                {props.itens.map(item => <CardProduto nome={item.descricao} preco={item.preco} imagem={item.imagem} codigo={item.codigo}/>)}
            </div>
        </div>
    )
}

export default CategoriaProdutos;
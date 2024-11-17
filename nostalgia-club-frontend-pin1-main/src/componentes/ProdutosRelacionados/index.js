import CardProduto from '../CardProduto'
import './ProdutosRelacionados.css'

const ProdutosRelacionados = (props) => {
    return (
        <section className="produtos-relacionados">
            <h3>Produtos Relacionados</h3>
            <div className="produtos-relacionados__cards">
                {props.produtosRelacionados.map(produto => <CardProduto nome={produto.descricao} preco={produto.preco} imagem={produto.imagem} codigo={produto.codigo}/>)}
            </div>
        </section>
    )
}

export default ProdutosRelacionados


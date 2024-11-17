import CabecalhoSecao from '../CabecalhoSecao';
import CardProduto from '../CardProduto';
import './MaisVendidos.css';

const MaisVendidos = (props) => {

    return (
        <section className="mais-vendidos">
            <CabecalhoSecao titulo="Promoções" subtitulo="Conheça os melhores preços por aqui"/>
            <div className="mais-vendidos__produtos">
                {props.produtos.map(produto => <CardProduto nome={produto.nomeProduto} preco={produto.preco} imagem={produto.imagem} codigo={produto.codigo}/>)}
            </div>
        </section>
    )
}

export default MaisVendidos;
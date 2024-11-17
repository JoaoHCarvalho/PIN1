import CabecalhoGrid from '../CabecalhoGrid'
import LinhaGrid from '../LinhaGrid'
import './GridProdutosCarrinho.css'

const GridProdutosCarrinho = (props) => {
    return (
        <div className="grid-produtos-carrinho">
            <CabecalhoGrid>
                {props.cabecalho.map(item => <span className={item.classes}>{item.titulo}</span>)}
            </CabecalhoGrid>
            <div className="grid-produtos-carrinho__itens">
                {props.itens.map(linha => <LinhaGrid>{linha.dadosGrid.map(coluna => <span className={coluna.classes}>{coluna.valor}</span>)}</LinhaGrid>)}
            </div>
        </div>
    )
}

export default GridProdutosCarrinho
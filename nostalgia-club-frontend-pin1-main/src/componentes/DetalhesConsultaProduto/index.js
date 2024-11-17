
import AreaOperacoesProduto from '../AreaOperacoesProduto'
import EspecificacaoProduto from '../EspecificacaoProduto'
import './DetalhesConsultaProduto.css'

const DetalhesConsultaProdutos = (props) => {
    return (
        <div className="detalhes-consulta-produto">
            <EspecificacaoProduto preco={props.preco} descricao={props.descricao} />
            <AreaOperacoesProduto produtoCodigo={props.codigoProduto}/>
        </div>
    )
}

export default DetalhesConsultaProdutos
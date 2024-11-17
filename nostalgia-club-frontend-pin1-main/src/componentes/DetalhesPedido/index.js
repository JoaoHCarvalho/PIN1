import BotaoPadrao from '../BotaoPadrao'
import CampoFormaPagamento from '../CampoFormaPagamento'
import CardTotalPedido from '../CardTotalPedido'
import FormularioDadosPessoais from '../FormularioDadosPessoais'
import './DetalhesPedido.css'

const DetalhesPedido = () => {

    const dadosTotal = {
        'subtotal': 'R$ 198,98', 'frete': 'R$ 27,90', 'total': 'R$ 227,90'
    }

    return (
        <section className="detalhes-pedido">
            <div className="detalhes-pedido__forms">
                <h1>Detalhes do Pedido</h1>
                <div className="detalhes-pedido__forms_pessoal">
                    <FormularioDadosPessoais />
                </div>
            </div>
            <div className="detalhes-pedido__dados">
                <CardTotalPedido subtotal={dadosTotal.subtotal} frete={dadosTotal.frete} total={dadosTotal.total} />
                <CampoFormaPagamento/>
                <BotaoPadrao titulo="Finalizar" link="/detalhes-pedido"/>
            </div>
        </section>
    )
}

export default DetalhesPedido
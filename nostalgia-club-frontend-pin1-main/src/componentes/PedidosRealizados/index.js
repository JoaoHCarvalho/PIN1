import CabecalhoGrid from '../CabecalhoGrid'
import LinhaGrid from '../LinhaGrid'
import './PedidosRealizados.css'

const PedidosRealizados = () => {

    const cabecalho = [
        { 'titulo': 'Pedido', 'classes': 'w-25 al-e' },
        { 'titulo': 'Total', 'classes': 'w-25 al-e' },
        { 'titulo': 'Data', 'classes': 'w-25 al-e' },
        { 'titulo': 'Status', 'classes': 'w-25 al-e' }
    ]

    const itens = [
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12341', 'classes': 'w-25 al-e'},
            {'valor': 'R$ 227,88', 'classes': 'w-25 al-e'},
            {'valor': '31/08/2024', 'classes': 'w-25 al-e'},
            {'valor': 'PAGO', 'classes': 'w-25 al-e'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12341', 'classes': 'w-25 al-e'},
            {'valor': 'R$ 227,88', 'classes': 'w-25 al-e'},
            {'valor': '31/08/2024', 'classes': 'w-25 al-e'},
            {'valor': 'PAGO', 'classes': 'w-25 al-e'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12341', 'classes': 'w-25 al-e'},
            {'valor': 'R$ 227,88', 'classes': 'w-25 al-e'},
            {'valor': '31/08/2024', 'classes': 'w-25 al-e'},
            {'valor': 'ENVIADO', 'classes': 'w-25 al-e'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12341', 'classes': 'w-25 al-e'},
            {'valor': 'R$ 227,88', 'classes': 'w-25 al-e'},
            {'valor': '31/08/2024', 'classes': 'w-25 al-e'},
            {'valor': 'RECEBIDO', 'classes': 'w-25 al-e'}
        ]}
    ]

    return (
        <section className="pedidos-realizados">
            <h2>Pedidos Realizados</h2>
            <div className="pedidos-realizados__grid">
                <CabecalhoGrid>
                    {cabecalho.map(item => <span className={item.classes}>{item.titulo}</span>)}
                </CabecalhoGrid>
                <div className="pedidos-realizados__grid__linhas">
                    {itens.map(linha => <LinhaGrid>{linha.dadosGrid.map(coluna => <a href="/detalhes-pedido" className={coluna.classes}>{coluna.valor}</a>)}</LinhaGrid>)}
                </div>
            </div>
        </section>
    )
}

export default PedidosRealizados
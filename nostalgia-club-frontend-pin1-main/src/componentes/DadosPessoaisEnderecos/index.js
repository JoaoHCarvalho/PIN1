import CabecalhoGrid from '../CabecalhoGrid'
import LinhaGrid from '../LinhaGrid'
import './DadosPessoaisEnderecos.css'

const DadosPessoaisEnderecos = (props) => {

    const cabecalho = [
        { 'titulo': 'Id', 'classes': 'w-20 al-e' },
        { 'titulo': 'Descrição', 'classes': 'w-15 al-e' }
    ]

    const itens = [
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12341', 'classes': 'w-20 al-e'},
            {'valor': 'Rua 282, Meia Praia, Itapema - SC', 'classes': 'w-50 al-e'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12342', 'classes': 'w-20 al-e'},
            {'valor': 'Rua 282, Meia Praia, Itapema - SC', 'classes': 'w-50 al-e'}
        ]},
        {'IdItem':'123', 'dadosGrid': [
            {'valor': '#12343', 'classes': 'w-20 al-e'},
            {'valor': 'Rua 282, Meia Praia, Itapema - SC', 'classes': 'w-50 al-e'}
        ]}
    ]

    return (
        <section className="dados-pessoais-enderecos">
            <h2>Meus Endereços</h2>
            <div className="dados-pessoais-enderecos__grid">
                <CabecalhoGrid>
                    {cabecalho.map(item => <span className={item.classes}>{item.titulo}</span>)}
                </CabecalhoGrid>
                <div className="dados-pessoais-enderecos__grid__linhas">
                    {itens.map(linha => <LinhaGrid>{linha.dadosGrid.map(coluna => <a href="/perfil/editar-endereco" className={coluna.classes}>{coluna.valor}</a>)}</LinhaGrid>)}
                </div>
            </div>
        </section>
    )
}

export default DadosPessoaisEnderecos
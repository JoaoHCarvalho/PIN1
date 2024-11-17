import CampoTexto from '../CampoTexto'
import './FormularioDadosCartao.css'

const FormularioDadosCartao = () => {
    return (
        <div className="formulario-dados-cartao">
            <h3>Dados Cartão</h3>
            <form>
                <CampoTexto label="Número do Cartão"/>
                <CampoTexto label="Nome no Cartão"/>
                <CampoTexto label="Data de Expiração"/>
                <CampoTexto label="Código de Segurança (CVV)"/>
            </form>
        </div>
    )
}

export default FormularioDadosCartao
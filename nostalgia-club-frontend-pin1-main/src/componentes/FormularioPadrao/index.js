import './FormularioPadrao.css'
import Hint from '../Hint'

const FormularioPadrao = (props) => {
    return (
        <form className="formulario-padrao">
            <div className="formulario-padrao-titulo">
                <h3>{props.titulo}</h3>
                <Hint mensagem="Para carregar seus dados pessoais automaticamente, acesse as configurações do seu perfil."/>
            </div>
            <div className="formulario-padrao__campos">
                {props.children}
            </div>
        </form>
    )
}

export default FormularioPadrao
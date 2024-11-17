import './FormularioPadrao.css'

const FormularioPadrao = (props) => {
    return (
        <form className="formulario-padrao">
            <h3>{props.titulo}</h3>
            <div className="formulario-padrao__campos">
                {props.children}
            </div>
        </form>
    )
}

export default FormularioPadrao
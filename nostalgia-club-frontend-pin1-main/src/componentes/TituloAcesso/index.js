import './TituloAcesso.css'

const TituloAcesso = (props) => {
    return (
        <div className="titulo-acesso">
            <h1>{props.titulo}</h1>
            <span>{props.subtitulo}</span>
        </div>
    )
}

export default TituloAcesso;
import './CardComentario.css'

const CardComentario = (props) => {
    return (
        <div className="card-comentario">
            <span className="card-comentario__autor">{props.autor}</span>
            <div className="card-comentario__box">
                <p>{props.mensagem}</p>
            </div>
        </div>
    )
}

export default CardComentario
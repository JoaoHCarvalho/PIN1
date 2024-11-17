import './CardCategoria.css'

const CardCategoria = (props) => {
    return (
            <a className="card-categoria" href={props.link}>
                <img src={props.imgSrc} alt={props.imgAlt} />
                <span>{props.descricao}</span>
            </a>
    )
}

export default CardCategoria;
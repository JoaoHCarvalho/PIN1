import './CabecalhoSecao.css';

const CabecalhoSecao = (props) => {
    return (
        <div className="cabecalho-secao">
            <h2>{props.titulo}</h2>
            <span>{props.subtitulo}</span>
        </div>
    )
}

export default CabecalhoSecao;
import './CardProduto.css';
import { Link } from 'react-router-dom';

const CardProduto = (props) => {
    return (
        <div className="card-produto">
            <Link className="card-produto__capa" to={`/detalhes-produto/${props.codigo}`}>
                <img alt={props.nome} src={props.imagem} />
            </Link>
            <div className="card-produto__info">
                <span className="card-produto__info__titulo">{props.nome}</span>
                <span className="card-produto__info__preco">{props.preco}</span>
            </div>
        </div>
    );
}

export default CardProduto;

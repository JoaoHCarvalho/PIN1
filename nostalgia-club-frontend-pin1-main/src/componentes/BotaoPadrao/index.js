import { useNavigate } from 'react-router-dom';
import './BotaoPadrao.css';

const BotaoPadrao = (props) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        
        if (props.onClick) {
            props.onClick(event); 
        }

        if (props.link) {
            navigate(props.link);
        }
    };

    return (
        <button
            className={`botao-padrao ${props.tamanho || ''}`}
            onClick={handleClick}
            type={props.type || 'button'}
        >
            {props.titulo}
        </button>
    );
};

export default BotaoPadrao;

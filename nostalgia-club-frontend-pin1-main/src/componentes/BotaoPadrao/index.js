import { useNavigate } from 'react-router-dom';
import './BotaoPadrao.css';

const BotaoPadrao = (props) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        // Executa uma função personalizada, se fornecida
        if (props.onClick) {
            props.onClick(event); // Passa o evento para o manipulador
        }

        // Redireciona, se um link for fornecido
        if (props.link) {
            navigate(props.link);
        }
    };

    return (
        <button
            className={`botao-padrao ${props.tamanho || ''}`}
            onClick={handleClick}
            type={props.type || 'button'} // Default para 'button', mas permite 'submit'
        >
            {props.titulo}
        </button>
    );
};

export default BotaoPadrao;

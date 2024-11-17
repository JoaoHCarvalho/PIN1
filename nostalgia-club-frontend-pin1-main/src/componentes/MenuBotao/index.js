import './MenuBotao.css';

const MenuBotao = (props) => {
    return (
        <div className="menu-botao" width={props.width} heigth={props.heigth}>
            <a className="link-botao" href={props.link}>
                {props.children}
            </a>
        </div>
    );
}

export default MenuBotao;
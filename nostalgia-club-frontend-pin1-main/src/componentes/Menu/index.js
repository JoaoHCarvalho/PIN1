import MenuBotao from '../MenuBotao';
import BarraPesquisa from '../BarraPesquisa';
import './Menu.css';

const Menu  = () => {
    return(
        <nav className="menu">
            <div className="menu-nav-options">
                <a href="/home"><img alt='Logo' src="http://localhost:3000/imagens/logo-nclub.png" height="70rem"></img></a>
                <MenuBotao link="/home">home</MenuBotao>
                <MenuBotao >gerenciar</MenuBotao>                
            </div>

            <BarraPesquisa placeholder="O que você quer encontrar hoje?"/>

            <div className="menu-perfil-options">
                <MenuBotao link="/meucarrinho">
                    <img alt='Carrinho' src="http://localhost:3000/imagens/carrinho-icon.png"></img>
                </MenuBotao>
                <MenuBotao link="/perfil">
                    <img alt='Perfil' src="	http://localhost:3000/imagens/perfil-icon.png"></img>
                </MenuBotao>
            </div>
        </nav>
    )
}

export default Menu;
import './Footer.css'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer__item footer__logo">
                <img alt="Logo" src="http://localhost:3000/imagens/logo-nclub.png"></img>
            </div>

            <div className="footer__item footer__informacoes">
                <h3>Informações</h3>
                <a href="/perfil">Minha Conta</a>
                <a href="/perfil/pedidos-realizados">Meus Pedidos</a>
            </div>

            <div className="footer__item footer__contatos">
                <h3>Contatos</h3>
                {props.contatos.map(contato => <a href={contato.link}>{contato.descricao}</a>)}
            </div>

            <div className="footer__item footer__categorias">
                <h3>Categorias</h3>
                {props.categorias.map(categoria => <a href={categoria.link}>{categoria.nome}</a>)}
            </div>
        </footer>
    )
}

export default Footer;
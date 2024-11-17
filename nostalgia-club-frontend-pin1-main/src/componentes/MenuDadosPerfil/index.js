import './MenuDadosPerfil.css'

const MenuDadosPerfil = () => {
    return (
        <div className="menu-dados-perfil">
            <div className="menu-dados-perfil__grupo">
                <span>Meus Dados</span>
                <div className="menu-dados-perfil__grupo__itens">
                    <a href='/perfil'>Informações Pessoais</a>
                    <a href='/perfil/enderecos'>Endereços</a>
                </div>
            </div>
            <div className="menu-dados-perfil__grupo">
                <span>Meus Pedidos</span>
                <div className="menu-dados-perfil__grupo__itens">
                    <a href='/perfil/pedidos-realizados'>Pedidos Realizados</a>
                </div>
            </div>
        </div>
    )
}

export default MenuDadosPerfil
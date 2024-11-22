import { Outlet } from 'react-router-dom'
import Menu from '../Menu'
import './PaginaBase.css'
import Footer from '../Footer'

const PaginaBase = () => {
    const contatos = [
        { 'descricao': 'Instagram', 'link': 'https://www.instagram.com/' },
        { 'descricao': 'TikTok', 'link': 'https://www.tiktok.com/login' },
        { 'descricao': 'E-mail', 'link': 'mailto:nclub.suporte@gmail.com' }
    ]

    const categorias = [
        { 'nome': 'Mídias', 'link': '/midias' },
        { 'nome': 'Dispositivos', 'link': '/dispositivos' }
    ]
    return (
        <div className='pagina-base'>
            <Menu />
            <Outlet />
            <Footer contatos={contatos} categorias={categorias} />
        </div>
    )
}

export default PaginaBase
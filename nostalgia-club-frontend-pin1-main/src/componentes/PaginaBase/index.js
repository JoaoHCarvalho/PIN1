import { Outlet } from 'react-router-dom'
import Menu from '../Menu'
import './PaginaBase.css'
import Footer from '../Footer'

const PaginaBase = () => {
    const contatos = [
        { 'descricao': 'Instagram', 'link': 'http://localhost:3000/?' },
        { 'descricao': 'TikTok', 'link': 'http://localhost:3000/?' },
        { 'descricao': 'E-mail', 'link': 'http://localhost:3000/?' }
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
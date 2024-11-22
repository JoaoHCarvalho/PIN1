import React, { useEffect, useState } from "react";
import FormularioLogin from "./componentes/FormularioLogin";
import HomePage from "./componentes/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioCadastro from "./componentes/FormularioCadastro";
import MeuCarrinho from "./componentes/MeuCarrinho";
import VitrineCategoria from "./componentes/VitrineCategoria";
import DetalhesProduto from "./componentes/DetalhesProduto";
import DetalhesPedido from "./componentes/DetalhesPedido";
import DadosPerfil from "./componentes/DadosPerfil";
import DadosPessoaisPerfil from "./componentes/DadosPessoaisPerfil";
import DadosPessoaisEnderecos from "./componentes/DadosPessoaisEnderecos";
import PaginaBase from "./componentes/PaginaBase";
import EditarEndereco from "./componentes/EditarEndereco";
import PedidosRealizados from "./componentes/PedidosRealizados";

const AppRoutes = () => {
    const [produtosMidias, setProdutosMidias] = useState([]);
    const [produtosDispositivos, setProdutosDispositivos] = useState([]);

    useEffect(() => {
        // Fetch para produtos do tipo 1 (Mídias)
        fetch("http://localhost:8080/produto/tipo/1")
            .then(response => response.json())
            .then(data => {
                const discos = data.filter(produto => produto.tipo === 1).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));
                const fitasMusica = data.filter(produto => produto.tipo === 2).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));
                const dvds = data.filter(produto => produto.tipo === 3).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));

                setProdutosMidias([
                    { tituloCategoria: 'Discos', itens: discos },
                    { tituloCategoria: 'Fitas - Música', itens: fitasMusica },
                    { tituloCategoria: 'DVD\'s', itens: dvds },
                ]);
            })
            .catch(error => console.error("Erro ao buscar produtos de mídia:", error));

        // Fetch para produtos do tipo 2 (Dispositivos)
        fetch("http://localhost:8080/produto/tipo/2")
            .then(response => response.json())
            .then(data => {
                const videoGames = data.filter(produto => produto.tipo === 1).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));
                console.log(videoGames)
                const walkmen = data.filter(produto => produto.tipo === 2).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));
                const vitrolas = data.filter(produto => produto.tipo === 3).map(produto => ({
                    codigo: produto.codigo,
                    descricao: produto.descricao,
                    preco: `R$ ${produto.preco.toFixed(2)}`,
                    imagem: produto.imagem,
                }));

                setProdutosDispositivos([
                    { tituloCategoria: 'Video-Games', itens: videoGames },
                    { tituloCategoria: 'Walkmen/s', itens: walkmen },
                    { tituloCategoria: 'Vitrolas', itens: vitrolas },
                ]);
            })
            .catch(error => console.error("Erro ao buscar produtos de dispositivos:", error));
    }, []);

    return (

        <Router>
            <Routes>
                <Route index element={<FormularioLogin />} />
                <Route path='/cadastro' element={<FormularioCadastro />} />

                <Route path='/' element={<PaginaBase />}>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/meucarrinho' element={<MeuCarrinho />} />
                    <Route path='/midias' element={<VitrineCategoria titulo="Mídias" subtitulo="Encontre aqui as obras que marcaram a sua vida" categoriasProduto={produtosMidias} />} />
                    <Route path='/dispositivos' element={<VitrineCategoria titulo="Dispositivos" subtitulo="Crie experiências incríveis com os aparelhos da sua história" categoriasProduto={produtosDispositivos} />} />
                    <Route path='/detalhes-produto/:codigo' element={<DetalhesProduto />} />
                    <Route path='/detalhes-pedido' element={<DetalhesPedido />} />

                    <Route path='/perfil' element={<DadosPerfil />}>
                        <Route index element={<DadosPessoaisPerfil />} />
                        <Route path="/perfil/enderecos" element={<DadosPessoaisEnderecos />} />
                        <Route path="/perfil/editar-endereco/:codigo" element={<EditarEndereco />} />
                        <Route path="/perfil/pedidos-realizados" element={<PedidosRealizados />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;

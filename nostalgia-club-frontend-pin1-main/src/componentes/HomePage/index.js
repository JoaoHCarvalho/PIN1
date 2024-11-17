import React, { useEffect, useState } from 'react';
import Banner from '../Banner';
import CategoriasBox from '../CategoriasBox';
import MaisVendidos from '../MaisVendidos';
import './HomePage.css';

const HomePage = () => {
    const [maisVendidos, setMaisVendidos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:8080/produto/all');
                const produtos = await response.json();

                const produtosComPromocao = produtos.filter((produto) => produto.promocao !== null);

                const produtosMaisVendidos = produtosComPromocao.slice(0, 6);

                setMaisVendidos(
                    produtosMaisVendidos.map((produto) => ({
                        codigo: produto.codigo,
                        nomeProduto: produto.descricao,
                        preco: `R$ ${produto.preco.toFixed(2)}`,
                        imagem: produto.imagem,
                    }))
                );
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div className="home-page">
            <Banner />
            <CategoriasBox />
            <MaisVendidos produtos={maisVendidos} />
        </div>
    );
};

export default HomePage;

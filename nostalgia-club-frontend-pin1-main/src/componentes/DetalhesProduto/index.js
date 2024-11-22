import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comentarios from '../Comentarios';
import ConsultaProduto from '../ConsultaProduto';
import ProdutosRelacionados from '../ProdutosRelacionados';
import './DetalhesProduto.css';

const DetalhesProduto = () => {
    const { codigo } = useParams();
    const [infoProduto, setInfoProduto] = useState(null);
    const [produtosRelacionados, setProdutosRelacionados] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const [comentariosCarregados, setComentariosCarregados] = useState(false);

    const recarregarComentarios = () => {
        setComentariosCarregados(false);
        fetch(`http://localhost:8080/comentario/all/${codigo}`)
            .then(response => response.json())
            .then(data => {
                const comentariosComAutor = data.map(comentario => ({
                    ...comentario,
                    autor: comentario.cliente ? comentario.cliente.nome : "Anônimo" 
                }));
                setComentarios(comentariosComAutor);
                setComentariosCarregados(true);
            })
            .catch(error => {
                console.error("Erro ao buscar comentários:", error);
                setComentariosCarregados(true);
            });
    };

    useEffect(() => {
        fetch(`http://localhost:8080/produto/${codigo}`)
            .then(response => response.json())
            .then(data => {
                setInfoProduto({
                    nome: data.nome,
                    tipo: data.tipo,
                    preco: `R$ ${data.preco.toFixed(2)}`,
                    descricao: data.descricao,
                    imagem: data.imagem,
                    categoria: data.categoria
                });
            })
            .catch(error => console.error("Erro ao buscar detalhes do produto:", error));

        recarregarComentarios();
// eslint-disable-next-line
    }, [codigo]);

    useEffect(() => {
        if (infoProduto?.categoria) {
            fetch(`http://localhost:8080/produto/tipo/${infoProduto.categoria}`)
                .then(response => response.json())
                .then(data => {
                    const produtosAleatorios = data
                        .filter(produto => produto.codigo !== Number(codigo))
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 3)
                        .map(produto => ({
                            ...produto,
                            preco: `R$ ${produto.preco.toFixed(2)}`
                        }));

                    setProdutosRelacionados(produtosAleatorios);
                })
                .catch(error => console.error("Erro ao buscar produtos relacionados:", error));
        }
    }, [infoProduto?.categoria, codigo]);

    return (
        <section className="detalhes-produto">
            {infoProduto && <ConsultaProduto infoProduto={infoProduto} codigoProduto={codigo} />}
            <ProdutosRelacionados produtosRelacionados={produtosRelacionados} />
            <Comentarios
                codigo={codigo}
                comentarios={comentarios}
                comentariosCarregados={comentariosCarregados}
                recarregarComentarios={recarregarComentarios} 
            />
        </section>
    );
};

export default DetalhesProduto;

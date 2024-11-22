import React, { useEffect, useState } from 'react';
import BotaoPadrao from '../BotaoPadrao';
import CardTotalPedido from '../CardTotalPedido';
import GridProdutosCarrinho from '../GridProdutosCarrinho';
import './MeuCarrinho.css';

const MeuCarrinho = () => {
    const [cabecalho] = useState([
        { titulo: 'Produto', classes: 'w-50 al-e' },
        { titulo: 'Preço', classes: 'w-15 al-e' },
        { titulo: 'Quantidade', classes: 'w-15 al-c' },
        { titulo: 'Subtotal', classes: 'w-15 al-c' },
    ]);

    const [itens, setItens] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [frete] = useState(27.9);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCarrinho = async () => {
            try {
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) {
                    throw new Error('Falha ao obter o status do usuário.');
                }
                const statusData = await responseStatus.json();
                const usuarioId = statusData.usuarioId;

                if (!usuarioId) {
                    throw new Error('Usuário não autenticado.');
                }

                const responseCarrinho = await fetch(`http://localhost:8080/carrinho/user/${usuarioId}`);
                if (!responseCarrinho.ok) {
                    throw new Error('Falha ao obter o carrinho do usuário.');
                }
                const carrinhoData = await responseCarrinho.json();

                const produtosPromises = carrinhoData.map(async (item) => {
                    const responseProduto = await fetch(`http://localhost:8080/produto/${item.produtoCodigo}`);
                    const produtoData = await responseProduto.json();
                    return {
                        id: item.codigo,
                        nome: produtoData.descricao,
                        preco: produtoData.preco,
                        quantidade: item.quantidade,
                        subtotal: produtoData.preco * item.quantidade,
                    };
                });

                const produtos = await Promise.all(produtosPromises);

                setItens(
                    produtos.map((produto) => ({
                        IdItem: produto.id,
                        dadosGrid: [
                            { valor: produto.nome, classes: 'w-50 al-e' },
                            { valor: `R$ ${produto.preco.toFixed(2)}`, classes: 'w-15 al-e' },
                            { valor: produto.quantidade, classes: 'w-15 al-c' },
                            { valor: `R$ ${produto.subtotal.toFixed(2)}`, classes: 'w-15 al-c' },
                        ],
                    }))
                );

                const subtotal = produtos.reduce((acc, item) => acc + item.subtotal, 0);
                setSubtotal(subtotal);
                setTotal(subtotal + frete);
            } catch (error) {
                console.error('Erro ao carregar os itens do carrinho:', error);
            }
        };

        fetchCarrinho();
    }, [frete]);

    const limparCarrinho = async () => {
        try {
            const response = await fetch('http://localhost:8080/carrinho/delete', {
                method: 'DELETE',
            });

            if (response.ok) {
                const result = await response.json();
                if (result === 1) {
                    setItens([]);
                    setSubtotal(0);
                    setTotal(0);
                    alert('Carrinho limpo com sucesso!');
                } else {
                    alert('Erro ao limpar o carrinho.');
                }
            } else {
                throw new Error('Falha ao chamar o endpoint para limpar o carrinho.');
            }
        } catch (error) {
            console.error('Erro ao limpar o carrinho:', error);
            alert('Não foi possível limpar o carrinho. Tente novamente.');
        }
    };

    return (
        <section className="meu-carrinho">
            <h1>Meu Carrinho</h1>
            <GridProdutosCarrinho cabecalho={cabecalho} itens={itens} />
            <BotaoPadrao titulo="Limpar Carrinho" tamanho="w-20" onClick={limparCarrinho} />
            <div className="meu-carrinho__total">
                <CardTotalPedido
                    subtotal={`R$ ${subtotal.toFixed(2)}`}
                    frete={`R$ ${frete.toFixed(2)}`}
                    total={`R$ ${total.toFixed(2)}`}
                >
                    <BotaoPadrao titulo="Realizar Pagamento" link="/detalhes-pedido" />
                </CardTotalPedido>
            </div>
        </section>
    );
};

export default MeuCarrinho;

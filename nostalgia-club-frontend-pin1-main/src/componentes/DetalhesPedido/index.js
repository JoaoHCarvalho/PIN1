import React, { useEffect, useState } from 'react';
import BotaoPadrao from '../BotaoPadrao';
import CampoFormaPagamento from '../CampoFormaPagamento';
import CardTotalPedido from '../CardTotalPedido';
import FormularioDadosPessoais from '../FormularioDadosPessoais';
import './DetalhesPedido.css';

const DetalhesPedido = () => {
    const [subtotal, setSubtotal] = useState(0);
    const [frete] = useState(27.9);
    const [total, setTotal] = useState(0);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchDetalhesPedido = async () => {
            try {
                // Obter o usuarioId do endpoint /usuario/status
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) {
                    throw new Error('Erro ao obter o status do usuário.');
                }
                const statusData = await responseStatus.json();
                const usuarioId = statusData.usuarioId;

                if (!usuarioId) {
                    throw new Error('Usuário não autenticado.');
                }

                setUserId(usuarioId);

                // Buscar itens do carrinho para o usuarioId
                const responseCarrinho = await fetch(`http://localhost:8080/carrinho/user/${usuarioId}`);
                if (!responseCarrinho.ok) {
                    throw new Error('Erro ao obter o carrinho do usuário.');
                }
                const carrinhoData = await responseCarrinho.json();

                // Buscar detalhes de cada produto no carrinho
                const produtosPromises = carrinhoData.map(async (item) => {
                    const responseProduto = await fetch(`http://localhost:8080/produto/${item.produtoCodigo}`);
                    const produtoData = await responseProduto.json();
                    return {
                        preco: produtoData.preco,
                        quantidade: item.quantidade,
                        subtotal: produtoData.preco * item.quantidade,
                    };
                });

                const produtos = await Promise.all(produtosPromises);

                // Atualizar subtotal e total
                const subtotal = produtos.reduce((acc, item) => acc + item.subtotal, 0);
                setSubtotal(subtotal);
                setTotal(subtotal + frete);
            } catch (error) {
                console.error('Erro ao carregar os detalhes do pedido:', error);
            }
        };

        fetchDetalhesPedido();
    }, [frete]);

    const handleFinalizarPedido = async () => {
        try {
            if (!userId) {
                alert('Erro: usuário não autenticado.');
                return;
            }

            // Obter a data atual e calcular a data de entrega
            const dataAtual = new Date();
            const dataPedido = dataAtual.toISOString().split('T')[0]; // Formato YYYY-MM-DD
            const diasEntrega = Math.floor(Math.random() * (15 - 6 + 1)) + 6; // Aleatório entre 6 e 15 dias
            const dataEntrega = new Date(dataAtual);
            dataEntrega.setDate(dataAtual.getDate() + diasEntrega);
            const dataEntregaFormatada = dataEntrega.toISOString().split('T')[0];

            // Criar o pedido
            const pedido = {
                valorCompra: subtotal,
                valorFrete: frete,
                dataPedido,
                dataEntrega: dataEntregaFormatada,
                cliente: null, // Presumindo que o cliente será preenchido pelo backend
                formaPagamento: null,
                userId,
            };

            const responsePedido = await fetch('http://localhost:8080/pedido/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pedido),
            });

            if (!responsePedido.ok) {
                throw new Error('Erro ao criar o pedido.');
            }

            // Limpar o carrinho
            const responseLimparCarrinho = await fetch('http://localhost:8080/carrinho/delete', {
                method: 'DELETE',
            });

            if (!responseLimparCarrinho.ok) {
                throw new Error('Erro ao limpar o carrinho.');
            }

            alert('Pedido finalizado com sucesso!');
            window.location.href = '/perfil/pedidos-realizados'; // Redirecionar para pedidos realizados
        } catch (error) {
            console.error('Erro ao finalizar o pedido:', error);
            alert('Erro ao finalizar o pedido. Tente novamente.');
        }
    };

    return (
        <section className="detalhes-pedido">
            <div className="detalhes-pedido__forms">
                <h1>Detalhes do Pedido</h1>
                <div className="detalhes-pedido__forms_pessoal">
                    <FormularioDadosPessoais />
                </div>
            </div>
            <div className="detalhes-pedido__dados">
                <CardTotalPedido
                    subtotal={`R$ ${subtotal.toFixed(2)}`}
                    frete={`R$ ${frete.toFixed(2)}`}
                    total={`R$ ${total.toFixed(2)}`}
                />
                <CampoFormaPagamento />
                <BotaoPadrao titulo="Finalizar" onClick={handleFinalizarPedido} />
            </div>
        </section>
    );
};

export default DetalhesPedido;

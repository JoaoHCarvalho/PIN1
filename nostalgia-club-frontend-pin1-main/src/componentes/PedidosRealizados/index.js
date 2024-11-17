import React, { useEffect, useState } from 'react';
import CabecalhoGrid from '../CabecalhoGrid';
import LinhaGrid from '../LinhaGrid';
import './PedidosRealizados.css';

const PedidosRealizados = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                // Obter o usuário através do endpoint /usuario/status
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) {
                    throw new Error('Erro ao obter o status do usuário.');
                }
                const statusData = await responseStatus.json();
                const usuarioId = statusData.usuarioId;

                if (!usuarioId) {
                    throw new Error('Usuário não autenticado.');
                }

                // Buscar pedidos do usuário
                const responsePedidos = await fetch(`http://localhost:8080/pedido/all/${usuarioId}`);
                if (!responsePedidos.ok) {
                    throw new Error('Erro ao obter os pedidos do usuário.');
                }

                const pedidosData = await responsePedidos.json();

                // Atualizar o estado com os pedidos
                setPedidos(pedidosData);
            } catch (error) {
                console.error('Erro ao carregar os pedidos:', error);
            }
        };

        fetchPedidos();
    }, []);

    // Função para calcular o status do pedido
    const calcularStatus = (dataEntrega) => {
        const hoje = new Date();
        const entrega = new Date(dataEntrega);

        const diferencaDias = Math.ceil((entrega - hoje) / (1000 * 60 * 60 * 24));

        if (diferencaDias <= 0) return 'RECEBIDO';
        if (diferencaDias <= 2) return 'EM TRÂNSITO';
        if (diferencaDias <= 5) return 'ENVIADO';
        return 'PAGO';
    };

    const cabecalho = [
        { titulo: 'Pedido', classes: 'w-25 al-e' },
        { titulo: 'Total', classes: 'w-25 al-e' },
        { titulo: 'Data', classes: 'w-25 al-e' },
        { titulo: 'Status', classes: 'w-25 al-e' }
    ];

    return (
        <section className="pedidos-realizados">
            <h2>Pedidos Realizados</h2>
            <div className="pedidos-realizados__grid">
                <CabecalhoGrid>
                    {cabecalho.map((item, index) => (
                        <span key={index} className={item.classes}>
                            {item.titulo}
                        </span>
                    ))}
                </CabecalhoGrid>
                <div className="pedidos-realizados__grid__linhas">
                    {pedidos.map((pedido) => (
                        <LinhaGrid key={pedido.codigo}>
                            <a href={`/detalhes-pedido/${pedido.codigo}`} className="w-25 al-e">
                                #{pedido.codigo}
                            </a>
                            <span className="w-25 al-e">
                                R$ {(pedido.valorCompra + pedido.valorFrete).toFixed(2)}
                            </span>
                            <span className="w-25 al-e">
                                {new Date(pedido.dataEntrega).toLocaleDateString('pt-BR')}
                            </span>
                            <span className="w-25 al-e">
                                {calcularStatus(pedido.dataEntrega)}
                            </span>
                        </LinhaGrid>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PedidosRealizados;

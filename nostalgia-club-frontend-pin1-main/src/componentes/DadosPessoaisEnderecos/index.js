import React, { useEffect, useState } from 'react';
import CabecalhoGrid from '../CabecalhoGrid';
import LinhaGrid from '../LinhaGrid';
import './DadosPessoaisEnderecos.css';

const DadosPessoaisEnderecos = () => {
    const [cabecalho] = useState([
        { titulo: 'Id', classes: 'w-20 al-e' },
        { titulo: 'Descrição', classes: 'w-50 al-e' },
    ]);

    const [itens, setItens] = useState([]);

    useEffect(() => {
        const fetchEnderecos = async () => {
            try {
                // Buscar o usuarioId através do endpoint de status
                const responseStatus = await fetch('http://localhost:8080/usuario/status');
                if (!responseStatus.ok) {
                    throw new Error('Erro ao buscar status do usuário.');
                }
                const statusData = await responseStatus.json();
                const usuarioId = statusData.usuarioId;

                // Buscar endereços do usuário
                const responseEnderecos = await fetch(`http://localhost:8080/endereco/all/${usuarioId}`);
                if (!responseEnderecos.ok) {
                    throw new Error('Erro ao buscar endereços do usuário.');
                }
                const enderecosData = await responseEnderecos.json();

                // Transformar os dados para o formato esperado
                const itensFormatados = enderecosData.map((endereco) => ({
                    IdItem: endereco.codigo,
                    dadosGrid: [
                        { valor: `#${endereco.codigo}`, classes: 'w-20 al-e' },
                        {
                            valor: `${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`,
                            classes: 'w-50 al-e',
                        },
                    ],
                }));

                setItens(itensFormatados);
            } catch (error) {
                console.error('Erro ao carregar endereços:', error);
            }
        };

        fetchEnderecos();
    }, []);

    return (
        <section className="dados-pessoais-enderecos">
            <h2>Meus Endereços</h2>
            <div className="dados-pessoais-enderecos__grid">
                <CabecalhoGrid>
                    {cabecalho.map((item, index) => (
                        <span key={index} className={item.classes}>
                            {item.titulo}
                        </span>
                    ))}
                </CabecalhoGrid>
                <div className="dados-pessoais-enderecos__grid__linhas">
                    {itens.map((linha) => (
                        <LinhaGrid key={linha.IdItem}>
                            {linha.dadosGrid.map((coluna, index) => (
                                <a
                                    key={index}
                                    href={`/perfil/editar-endereco/${linha.IdItem}`}
                                    className={coluna.classes}
                                >
                                    {coluna.valor}
                                </a>
                            ))}
                        </LinhaGrid>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DadosPessoaisEnderecos;

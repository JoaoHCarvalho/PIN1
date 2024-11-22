import React, { useState } from 'react';
import BotaoPadrao from '../BotaoPadrao';
import CampoPadrao from '../CampoPadrao';
import CardComentario from '../CardComentario';
import './Comentarios.css';

const Comentarios = ({ codigo, comentarios, comentariosCarregados, recarregarComentarios }) => {
    const [comentario, setComentario] = useState('');
    const [enviando, setEnviando] = useState(false);

    const handleComentarioChange = (e) => {
        setComentario(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!comentario.trim()) {
            alert('Por favor, insira um comentário válido.');
            return;
        }

        try {
            setEnviando(true);

            // Obter o cliente a partir do status
            const responseStatus = await fetch('http://localhost:8080/usuario/status');
            if (!responseStatus.ok) {
                throw new Error('Erro ao obter o status do usuário.');
            }
            const statusData = await responseStatus.json();
            const clienteId = statusData.usuarioId;

            if (!clienteId) {
                throw new Error('Usuário não autenticado.');
            }

            // Criar o comentário
            const comentarioData = {
                mensagem: comentario,
                codigoProd: codigo,
                cliente: {
                    usuarioId: clienteId,
                    nome: statusData.nome
                },
            };

            const response = await fetch('http://localhost:8080/comentario/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comentarioData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar o comentário.');
            }

            alert('Comentário enviado com sucesso!');
            setComentario('');

            // Atualiza a lista de comentários após o envio
            recarregarComentarios();
        } catch (error) {
            console.error('Erro ao enviar comentário:', error);
            alert('Não foi possível enviar o comentário. Tente novamente.');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <section className="comentarios">
            <h3>Comentários</h3>
            <form className="form-comentario" onSubmit={handleSubmit}>
                <CampoPadrao
                    type="text"
                    label="Insira um comentário:"
                    tamanho="w-79"
                    name="comentario"
                    value={comentario}
                    onChange={handleComentarioChange}
                />
                <BotaoPadrao titulo={enviando ? 'Enviando...' : 'Gravar'} type="submit" disabled={enviando} />
            </form>

            {comentariosCarregados ? (
                comentarios.length > 0 ? (
                    <div className="comentarios__cards">
                        {comentarios.map((comentario, index) => (
                            <CardComentario key={index} autor={comentario.autor} mensagem={comentario.mensagem} />
                        ))}
                    </div>
                ) : (
                    <p>Este produto não possui comentários</p>
                )
            ) : (
                <p>Carregando comentários...</p>
            )}
        </section>
    );
};

export default Comentarios;

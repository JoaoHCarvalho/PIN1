import CardComentario from '../CardComentario'
import './Comentarios.css'

const Comentarios = ({ comentarios, comentariosCarregados }) => {
    return (
        <section className="comentarios">
            <h3>Comentários</h3>
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


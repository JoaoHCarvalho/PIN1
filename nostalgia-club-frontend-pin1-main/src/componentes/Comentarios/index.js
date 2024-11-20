import BotaoPadrao from '../BotaoPadrao';
import CampoPadrao from '../CampoPadrao';
import CardComentario from '../CardComentario'
import './Comentarios.css'


const Comentarios = ({ comentarios, comentariosCarregados }) => {
    return (
        <section className="comentarios">
            <h3>Comentários</h3>
            <form className="form-comentario">
                <CampoPadrao
                    type="text"
                    label="Insira um comentário:"
                    tamanho="w-79"
                    name="nome"
                />
                <BotaoPadrao titulo="Gravar" type="button" />
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


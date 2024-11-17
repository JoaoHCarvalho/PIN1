import BotaoPadrao from '../BotaoPadrao'
import CampoPadrao from '../CampoPadrao'
import './EditarEndereco.css'

const EditarEndereco = () => {
    return (
        <section className="editar-endereco">
            <h2>Endereço</h2>
            <form className="editar-endereco__form">
                <div className="agrupador">
                    <CampoPadrao tamanho="w-79" type="text" label="CEP" />
                    <CampoPadrao tamanho="w-20" type="text" label="Número" />
                </div>
                <CampoPadrao tamanho="w-100" type="text" label="Rua" />
                <CampoPadrao tamanho="w-100" type="text" label="Bairro" />
                <div className="agrupador">
                    <CampoPadrao tamanho="w-79" type="text" label="Cidade" />
                    <CampoPadrao tamanho="w-20" type="text" label="Estado" />
                </div>
                <div className="editar-endereco__form__botoes">
                    <BotaoPadrao titulo="Excluir" tamanho="w-49" />
                    <BotaoPadrao titulo="Confirmar" tamanho="w-49" />
                </div>
            </form>
        </section>
    )
}

export default EditarEndereco
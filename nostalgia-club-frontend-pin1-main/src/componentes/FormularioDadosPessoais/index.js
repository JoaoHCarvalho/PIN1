import CampoPadrao from '../CampoPadrao'
import FormularioPadrao from '../FormularioPadrao'
import './FormularioDadosPessoais.css'

const FormularioDadosPessoais = () => {
    return (
        <div className="formulario-dados-pessoais">
            <FormularioPadrao titulo="Informações Pessoais">
                <CampoPadrao type="text" label="Nome Completo" tamanho="w-100" />
                <div className="agrupador">
                    <CampoPadrao type="text" label="CPF" tamanho="w-49" />
                    <CampoPadrao type="text" label="Telefone" tamanho="w-49" />
                </div>
                <div className="agrupador">
                    <CampoPadrao type="text" label="CEP" tamanho="w-79" />
                    <CampoPadrao type="number" label="Número" tamanho="w-20" />
                </div>
                <CampoPadrao type="text" label="Rua" tamanho="w-100" />
                <CampoPadrao type="text" label="Bairro" tamanho="w-100" />
                <div className="agrupador">
                    <CampoPadrao type="text" label="Cidade" tamanho="w-79" />
                    <CampoPadrao type="text" label="Estado" tamanho="w-20" />
                </div>
            </FormularioPadrao>
        </div>
    )
}

export default FormularioDadosPessoais
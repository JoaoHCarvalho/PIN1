import './CampoFrete.css'

const CampoFrete = () => {
    return (
        <div className="campo-frete">
            <div className="campo-frete__valor">
                <span>FRETE</span>
                <span>R$ 27,90</span>
            </div>
            <input type="text" placeholder="Informe seu CEP"></input>
        </div>
    )
}

export default CampoFrete
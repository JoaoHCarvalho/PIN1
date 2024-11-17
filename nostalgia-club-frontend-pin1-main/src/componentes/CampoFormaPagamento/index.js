import './CampoFormaPagamento.css'

const CampoFormaPagamento = () => {
    return (
        <div className="campo-forma-pagamento">
            <label>Forma de Pagamento:</label>
            <select disabled>
                <option>Pix</option>
            </select>
        </div>
    )
}

export default CampoFormaPagamento
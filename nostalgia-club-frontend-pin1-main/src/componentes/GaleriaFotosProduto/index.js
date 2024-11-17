import './GaleriaFotosProduto.css'

const GaleriaFotosProduto = (props) => {
    return (
        <div className="galeria-fotos-produto">
            <div className="foto-principal">
                <img src={props.miniatura} alt={props.miniatura.titulo}/>
            </div>
        </div>
    )
}

export default GaleriaFotosProduto
/*const miniaturas = props.miniaturas;

    return (
        <div className="galeria-fotos-produto">
            <div className="miniaturas">
                {miniaturas.map((miniatura) => <img src={miniatura.caminho} alt={miniatura.titulo}/>)}                
            </div>
            <div className="foto-principal">
                <img src={miniaturas[0].caminho} />
            </div>
        </div>
    )
*/
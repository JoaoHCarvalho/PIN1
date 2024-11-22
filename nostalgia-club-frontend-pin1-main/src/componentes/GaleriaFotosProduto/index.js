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
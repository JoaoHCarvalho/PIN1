import './CabecalhoGrid.css'

const CabecalhoGrid = (props) => {
    return (
        <div className="cabecalho-grid">
            {props.children}
        </div>
    )
}

export default CabecalhoGrid
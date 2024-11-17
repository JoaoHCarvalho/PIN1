import './LinhaGrid.css'

const LinhaGrid = (props) => {
    return (
        <div className="linha-grid">
            {props.children}
        </div>
    )
}

export default LinhaGrid
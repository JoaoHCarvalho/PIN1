import './BarraPesquisa.css';

const BarraPesquisa = (props) => {
    return (
        <div className="box-pesquisa" width={props.width}>
            <form>
                <input type="text" placeholder={props.placeholder} />
            </form>
        </div>
    )
}

export default BarraPesquisa;
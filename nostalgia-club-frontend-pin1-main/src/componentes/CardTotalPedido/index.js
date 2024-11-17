import './CardTotalPedido.css'

const CardTotalPedido = (props) => {
    return (
        <div className="card-total-pedido">
            <span>Total do Pedido</span>
            <div className="card-total-pedido__box">
                <div className="card-total-pedido__box__linha">
                    <div className="card-total-pedido__box__coluna titulo">Subtotal</div>
                    <div className="card-total-pedido__box__coluna valor">{props.subtotal}</div>
                </div>
                <div className="card-total-pedido__box__linha">
                    <div className="card-total-pedido__box__coluna titulo">Frete</div>
                    <div className="card-total-pedido__box__coluna valor">{props.frete}</div>
                </div>
                <hr />
                <div className="card-total-pedido__box__linha">
                    <div className="card-total-pedido__box__coluna titulo">Total</div>
                    <div className="card-total-pedido__box__coluna valor">{props.total}</div>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CardTotalPedido
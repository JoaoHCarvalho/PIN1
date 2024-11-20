import './Hint.css'

const Hint = (props) => {
    return (
        <div class="hint-container">
            <span class="hint-icon">?</span>
            <div class="hint-message">{props.mensagem}</div>
        </div>
)
}

export default Hint;
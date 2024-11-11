import '../styles/RulesButton.css'

function RulesButton({ onClick }) {
    return (
        <div className="rules-container">
            <button className='rules-button' role='button' onClick={onClick}>RULES</button>
        </div>
    )
}

export default RulesButton
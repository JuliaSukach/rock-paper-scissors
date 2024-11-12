import '../styles/ChoiceButton.css'

const ChoiceButton = ({ choice, onSelect, imgSrc = '', isSelected, isComputerChoosing }) => {
    return (
        <div className={`choice-container ${choice}`}>
            <button
                className={`choice-button ${choice} ${isSelected ? 'selected' : ''} ${isComputerChoosing ? 'computer-choosing' : ''}`} 
                onClick={() => onSelect(choice)} role='button' aria-label={choice}
            >
                <img src={imgSrc} alt={choice} className="choice-icon" />
            </button>
        </div>
    )
}

export default ChoiceButton
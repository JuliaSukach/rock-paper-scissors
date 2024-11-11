import '../styles/Modal.css'
import rules from '../assets/images/image-rules.svg'
import close from '../assets/images/icon-close.svg'
import rulesBonus from '../assets/images/image-rules-bonus.svg'

function RulesModal({ closeModal }) {
    return (
        <div className="modal-overlay">
            <div className='modal'>
                <div className="modal-content">
                    <div className='header'>
                        <h3>RULES</h3>
                        <img className="close-btn" src={close} onClick={closeModal} alt="close" />
                    </div>
                    <div className='rule-diagram'>
                        <img src={rules} alt="rules-diagram" />
                    </div>
                    
                    {/* Bonus rules if you want to add Rock, Paper, Scissors, Lizard, Spock
                    <div className='rule-diagram'>
                        <img src={rulesBonus} alt="rules-diagram" />
                    </div>*/}
                </div>
            </div>
      </div>
    )
}

export default RulesModal
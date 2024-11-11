import './App.css'
import React, { useState } from 'react'
import { GameProvider } from './hooks/useGameLogic'
import RulesModal from './components/RulesModal'
import RulesButton from './components/RulesButton'
import SelectionBoard from './components/SelectionBoard'
import Score from './components/Score'
import GameBoard from './components/GameBoard' // Make sure to import GameBoard
import logo from './assets/images/logo.svg'

function App() {
    const [showModal, setShowModal] = useState(false)

    return (
        <GameProvider>
            <div className="App">
                {/* Display the score */}
                <div className='score-container'>
                    <div className='game-name'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='score-wrap'>
                        <h3 className='score-title'>SCORE</h3>
                        <Score />
                    </div>
                </div>

                {/* Selection Board for Rock, Paper, Scissors */}
                <SelectionBoard />

                {/* Game board to display the player's and computer's choice */}
                <GameBoard />

                {/* Modal for Rules */}
                {showModal && <RulesModal closeModal={() => setShowModal(false)} />}
                
                {/* Button to Show Rules */}
                <RulesButton onClick={() => setShowModal(true)} />
            </div>
        </GameProvider>
    )
}

export default App
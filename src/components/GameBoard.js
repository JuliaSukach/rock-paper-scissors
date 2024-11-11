import React from 'react'
import { useGameLogic } from '../hooks/useGameLogic'
import ChoiceButton from './ChoiceButton'
import paperImage from '../assets/images/icon-paper.svg'
import scissorsImage from '../assets/images/icon-scissors.svg'
import rockImage from '../assets/images/icon-rock.svg'

const GameBoard = () => {
    const {
        playerChoice,
        computerChoice,
        result,
        isComputerChoosing,
        selectedChoice,
        showResult,
        handlePlayerSelect,
        playAgain
    } = useGameLogic()

    // Map choices to images
    const choiceImages = {
        rock: rockImage,
        paper: paperImage,
        scissors: scissorsImage
    }

    if (!playerChoice) return null

    return (
        <div className="game-board">
            <div className='choice-wrap'>
                <ChoiceButton
                    choice={playerChoice}
                    onSelect={handlePlayerSelect}
                    isSelected={selectedChoice === playerChoice}
                    imgSrc={choiceImages[playerChoice]} // Get the image for the player's choice
                />
                <ChoiceButton choice={computerChoice}
                    isComputerChoosing={isComputerChoosing}
                    onSelect={() => {}} // Disable click for computer choice
                    imgSrc={choiceImages[computerChoice]} // Get the image for the computer's choice
                />
            </div>
            {showResult && ( // Only show the result and play again button if showResult is true
                <>
                    <h1 className='result'>{result}</h1>
                    <button className='reset' role='button' onClick={playAgain}>PLAY AGAIN</button>
                </>
            )}
        </div>
    )
}

export default GameBoard

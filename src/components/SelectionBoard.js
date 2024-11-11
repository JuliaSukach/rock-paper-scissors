import React from 'react'
import ChoiceButton from "./ChoiceButton"
import { useGameLogic } from '../hooks/useGameLogic'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
import rock from '../assets/images/icon-rock.svg'

import '../styles/SelectionBoard.css'

function SelectionBoard() {
    const { handlePlayerSelect, playerChoice } = useGameLogic()

    if (playerChoice) return null

    return (
        <div className="selection-board">
            <ChoiceButton choice="paper" onSelect={handlePlayerSelect} imgSrc={paper} />
            <ChoiceButton choice="scissors" onSelect={handlePlayerSelect} imgSrc={scissors} />
            <ChoiceButton choice="rock" onSelect={handlePlayerSelect} imgSrc={rock} />
        </div>
    )
}

export default SelectionBoard

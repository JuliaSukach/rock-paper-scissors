import React from 'react'
import { useGameLogic } from '../hooks/useGameLogic'

const Score = () => {
    const { score } = useGameLogic()

    return (
        <h1 className='score-num'>{score}</h1>
    )
}

export default Score

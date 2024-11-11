import { createContext, useContext, useState, useEffect } from 'react'

// Create Context
const GameContext = createContext()

export const useGameLogic = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
    const [playerChoice, setPlayerChoice] = useState("")
    const [computerChoice, setComputerChoice] = useState("")
    const [result, setResult] = useState("")
    const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem("score")
        return savedScore ? JSON.parse(savedScore) : 0
    })

    // states for animations
    const [isComputerChoosing, setIsComputerChoosing] = useState(false)
    const [selectedChoice, setSelectedChoice] = useState(null)
    const [showResult, setShowResult] = useState(false)

    const choices = ["rock", "paper", "scissors"]

    const handlePlayerSelect = (choice) => {
        if (showResult || isComputerChoosing) return
        setSelectedChoice(choice) // Set the selected choice for animation
        setPlayerChoice(choice)

        // Start computer choosing animation
        setIsComputerChoosing(true)
        setTimeout(() => {
            const randomChoice = choices[Math.floor(Math.random() * choices.length)]
            setComputerChoice(randomChoice)
            calculateResult(choice, randomChoice)
            setIsComputerChoosing(false) // Reset after choosing
            setShowResult(true)
        }, 2000) // Match this duration with your animation
    }

    const calculateResult = (player, computer) => {
        let gameResult
        if (player === computer) {
            gameResult = "IT'S A TIE"
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            gameResult = "YOU WIN"
            updateScore(1)
        } else {
            gameResult = "YOU LOSE"
            updateScore(-1)
        }
        setResult(gameResult)
    }

    const updateScore = (increment) => {
        setScore(prevScore => {
            const newScore = prevScore + increment
            localStorage.setItem('score', newScore)
            return newScore
        })
    }

    const playAgain = () => {
        setPlayerChoice("")
        setComputerChoice("")
        setResult("")

        setIsComputerChoosing(false) // Reset choosing state
        setSelectedChoice(null) // Reset selected choice
        setShowResult(false)
    }

    useEffect(() => {
        localStorage.setItem("score", score)
    }, [score])

    return (
        <GameContext.Provider value={{ playerChoice, computerChoice, result, score, isComputerChoosing, selectedChoice, showResult, handlePlayerSelect, playAgain }}>
            {children}
        </GameContext.Provider>
    )
}
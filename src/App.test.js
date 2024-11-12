import React from 'react'
import { act } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import { GameProvider } from './hooks/useGameLogic'

describe('App component', () => {
    test('renders the app with the score, selection board, and rules button', () => {
        render(
            <GameProvider>
                <App />
            </GameProvider>
        )

        // Check if the score is displayed
        expect(screen.getByText(/score/i)).toBeInTheDocument()

        // Check if the selection board is rendered
        expect(screen.getByAltText('rock')).toBeInTheDocument()
        expect(screen.getByAltText('paper')).toBeInTheDocument()
        expect(screen.getByAltText('scissors')).toBeInTheDocument()
    })
})
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RulesModal from '../components/RulesModal'

describe('RulesModal component', () => {
    test('renders rules modal and close button', () => {
        const mockClose = jest.fn()
        render(<RulesModal closeModal={mockClose} />)
        
        expect(screen.getByText(/rules/i)).toBeInTheDocument()
        expect(screen.getByRole('img', { name: /close/i })).toBeInTheDocument()
        
        fireEvent.click(screen.getByRole('img', { name: /close/i }))
        expect(mockClose).toHaveBeenCalled()
    })
})

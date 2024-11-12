import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RulesButton from '../components/RulesButton'

describe('RulesButton component', () => {
    test('renders the rules button and handles click', () => {
        const mockOnClick = jest.fn()
        render(<RulesButton onClick={mockOnClick} />)
        
        const button = screen.getByRole('dialog')
        expect(button).toBeInTheDocument()
        
        fireEvent.click(button)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})

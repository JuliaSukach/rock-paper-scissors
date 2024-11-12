import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ChoiceButton from '../components/ChoiceButton'

describe('ChoiceButton component', () => {
    test('renders button with image and handles click', () => {
        const mockSelect = jest.fn()
        render(<ChoiceButton choice="rock" onSelect={mockSelect} imgSrc="rock.png" />)
        
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', 'rock.png')
        
        fireEvent.click(button)
        expect(mockSelect).toHaveBeenCalledWith('rock')
    })

    test('applies selected class when isSelected is true', () => {
        render(<ChoiceButton choice="rock" onSelect={() => {}} imgSrc="rock.png" isSelected={true} />)
        
        const button = screen.getByRole('button')
        expect(button).toHaveClass('selected')
    })

    test('applies computer-choosing class when isComputerChoosing is true', () => {
        render(<ChoiceButton choice="rock" onSelect={() => {}} imgSrc="rock.png" isComputerChoosing={true} />)
        
        const button = screen.getByRole('button')
        expect(button).toHaveClass('computer-choosing')
    })
})

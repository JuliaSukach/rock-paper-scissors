import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { GameProvider, useGameLogic } from '../hooks/useGameLogic'

describe('useGameLogic', () => {
    it('should initialize with default values', () => {
        const { result } = renderHook(() => useGameLogic(), { wrapper: GameProvider })
        expect(result.current.playerChoice).toBe('')
        expect(result.current.computerChoice).toBe('')
        expect(result.current.result).toBe('')
        expect(result.current.score).toBe(0)
        expect(result.current.isComputerChoosing).toBe(false)
        expect(result.current.selectedChoice).toBe(null)
        expect(result.current.showResult).toBe(false)
    })

    it('should allow playing again', () => {
        const { result } = renderHook(() => useGameLogic(), { wrapper: GameProvider })
        
        act(() => {
            result.current.playAgain()
        })

        expect(result.current.playerChoice).toBe('')
        expect(result.current.computerChoice).toBe('')
        expect(result.current.result).toBe('')
        expect(result.current.showResult).toBe(false)
    })
})

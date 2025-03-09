import { useState } from 'react'
import Field from './Field'
import Information from './Information'
import styles from './styles.module.css'

function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	const handleCellClick = (index) => {
		if (field[index] !== '' || isGameEnded) return

		const newField = [...field]
		newField[index] = currentPlayer
		setField(newField)

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true)
			return
		}

		if (!newField.includes('')) {
			setIsDraw(true)
			return
		}

		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
	}

	const checkWin = (currentField, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => currentField[index] === player)
		)
	}

	const resetGame = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	return (
		<div className={styles.game}>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} onCellClick={handleCellClick} />
			<button className={styles['reset-button']} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	)
}

export default Game

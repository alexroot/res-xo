import PropTypes from 'prop-types'
import styles from './styles.module.css'

function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
	return (
		<div className={styles.status}>
			{isDraw
				? 'Ничья'
				: isGameEnded
				? `Победа: ${currentPlayer}`
				: `Ходит: ${currentPlayer}`}
		</div>
	)
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
}

export default InformationLayout

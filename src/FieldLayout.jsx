import PropTypes from 'prop-types'
import styles from './styles.module.css'

function FieldLayout({ field, onCellClick }) {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button key={index} className='cell' onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
}

export default FieldLayout

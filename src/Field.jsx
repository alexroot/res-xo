import PropTypes from 'prop-types'
import FieldLayout from './FieldLayout'

function Field({ field, onCellClick }) {
	return <FieldLayout field={field} onCellClick={onCellClick} />
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
}

export default Field

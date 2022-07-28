import PropTypes from 'prop-types';
import React from 'react'

const Aliment = ({ label, protein, carbohydrate, fat, quantity }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{protein}</td>
      <td>{carbohydrate}</td>
      <td>{fat}</td>
      <td>
        <label htmlFor={`quantity-${label}`}>
            <input id={`quantity-${label}`} value={quantity}  />
        </label>
      </td>
    </tr>
  )
}

Aliment.propTypes = {
  label: PropTypes.string.isRequired,
  protein: PropTypes.number.isRequired,
  carbohydrate: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Aliment;
import PropTypes from 'prop-types';
import React from 'react'

const Aliment = ({ name, protein, carbohydrate, fat, quantity }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{protein}</td>
      <td>{carbohydrate}</td>
      <td>{fat}</td>
      <td>
        <label htmlFor={`quantity-${name}`}>
            <input id={`quantity-${name}`}  />
        </label>
      </td>
    </tr>
  )
}

Aliment.propTypes = {
  name: PropTypes.string.isRequired,
  protein: PropTypes.number.isRequired,
  carbohydrate: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Aliment;
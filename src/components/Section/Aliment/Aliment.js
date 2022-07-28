import PropTypes from 'prop-types';
import React from 'react'

const Aliment = ({ name, protein, carbohydrate, fat, quantity }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{protein}</td>
      <td>{carbohydrate}</td>
      <td>{fat}</td>
      <td>{quantity}&nbsp;g</td>
    </tr>
  )
}

Aliment.propTypes = {
  name: PropTypes.string.isRequired,
  protein: PropTypes.string.isRequired,
  carbohydrate: PropTypes.string.isRequired,
  fat: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default Aliment;
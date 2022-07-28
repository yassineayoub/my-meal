import PropTypes from 'prop-types';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../../actions/actions';

const Aliment = ({ id, label, protein, carbohydrate, fat, quantity }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{label}</td>
      <td>{protein}</td>
      <td>{carbohydrate}</td>
      <td>{fat}</td>
      <td>
        <label htmlFor={`quantity-${label}`}>
            <input id={`quantity-${label}`} aria-valuemin={1} value={quantity} onChange={(e) =>dispatch(setQuantity(e.currentTarget.value,id))} />
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
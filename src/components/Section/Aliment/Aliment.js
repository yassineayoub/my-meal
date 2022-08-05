import PropTypes from 'prop-types';
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { deleteAliment, setQuantity } from '../../../actions/actions';

const Aliment = ({ id, label, protein, carbs, fat, quantity }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{label}</td>
      <td>{protein}</td>
      <td>{carbs}</td>
      <td>{fat}</td>
      <td>
        {/* <label htmlFor={`quantity-${label}`}>
            <input id={`quantity-${label}`} aria-valuemin={1} value={quantity} onChange={(e) =>dispatch(setQuantity(e.currentTarget.value,id))} />
        </label> */}
        <TextField id={`quantity-${label}`} name={label} type="number" value={quantity} onChange={(e) =>dispatch(setQuantity(e.currentTarget.value,id))}/>
        <DeleteIcon onClick={() => dispatch(deleteAliment(id))} />
      </td>
    </tr>
  )
}

Aliment.propTypes = {
  label: PropTypes.string.isRequired,
  protein: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Aliment;
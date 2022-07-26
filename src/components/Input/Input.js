import { TextField, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import React from 'react'
import { addAliment, setAlimentCalories, setAlimentName } from '../../actions/actions'

const Input = () => {
  const alimentCalorie = useSelector((state) => state.alimentCalorie);
  const alimentName = useSelector((state) => state.alimentName);
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addAliment());
    }}>
      <TextField label="Nom aliment" value={alimentName} onChange={(e) => dispatch(setAlimentName(e.currentTarget.value))} />
      <TextField label="calories" value={alimentCalorie} onChange={(e) => dispatch(setAlimentCalories(e.currentTarget.value))} />
      <Button type='submit' variant="outlined" 
      >Generer</Button>
    </form>
  )
}

export default Input;

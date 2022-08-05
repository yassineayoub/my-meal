import { useState } from 'react'
import { TextField } from '@material-ui/core'

import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addAlimentToArray } from '../../../actions/actions'

const CreateAlimentForm = () => {
  const [aliment, setAliment] = useState({})
  const dispatch = useDispatch();
  console.log(aliment)
  return (
    <>
    <form onSubmit={(e) => 
    {e.preventDefault();
    dispatch(addAlimentToArray(aliment))}}>
      <div className="form__input">
        <label htmlFor='label'>Nom de l'aliment :</label>
        <input id='label' onChange={(e) => setAliment({...aliment, [e.currentTarget.id]: e.currentTarget.value})}/>
      </div>
      <div className="form__input">
        <label htmlFor='carbs'>Glucides : </label>
        <input id='carbs' onChange={(e) => setAliment({...aliment, [e.currentTarget.id]: e.currentTarget.value})}/>
      </div>
      <div className="form__input">
        <label htmlFor='protein'>Proteines :</label>
        <input id='protein' onChange={(e) => setAliment({...aliment, [e.currentTarget.id]: e.currentTarget.value})}/>
      </div>
      <div className="form__input">
        <label htmlFor='fat'>Lipides :</label>
        <input id='fat' onChange={(e) => setAliment({...aliment, [e.currentTarget.id]: e.currentTarget.value})}/>
      </div>
    <Button type="submit">Ajouter</Button>
    </form>
    </>
  )
}

export default CreateAlimentForm
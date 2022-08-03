import { useState } from 'react'
import { TextField } from '@material-ui/core'

import { Button } from '@mui/material'
import React from 'react'

const CreateAlimentForm = () => {
  const [aliment, setAliment] = useState({})
  console.log(aliment)
  return (
    <>
    <form>
      <div className="form__input">
        <label htmlFor='name'>Nom de l'aliment :</label>
        <input id='name' onChange={(e) => setAliment({...aliment, [e.currentTarget.id]: e.currentTarget.value})}/>
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
    <Button>Ajouter</Button>
    </form>
    </>
  )
}

export default CreateAlimentForm
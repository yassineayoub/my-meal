import { TextField } from '@material-ui/core'
import { Button } from '@mui/material'
import React from 'react'

const CreateAlimentForm = () => {
  
  return (
    <>
    <label>Nom de l'aliment :
      <input />
    </label>
    <label>Glucides :
      <input />
    </label>
    <label>Proteines :
      <input />
    </label>
    <label>Lipides :
      <input />
    </label>
    <Button>Ajouter</Button>
    </>
  )
}

export default CreateAlimentForm
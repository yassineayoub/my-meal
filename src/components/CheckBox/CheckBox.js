import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = () => {
  return (
    <FormGroup>
        <FormControlLabel control={<Checkbox onChange={(e) => console.log(e)} defaultChecked />} label="Ajouter à tous" />
        <FormControlLabel disabled control={<Checkbox />} label="Ajouter à matin" />
    </FormGroup>
  )
}

export default CheckBox
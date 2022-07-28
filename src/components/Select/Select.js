import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux'

export default function ComboBox() {
    const aliments = useSelector((state) => state.aliments)
    
      return (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={aliments}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Aliments" />}
        />
      );
    }
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setAlimentSelected } from '../../actions/actions';

export default function ComboBox() {
    const aliments = useSelector((state) => state.aliments)
    const dispatch = useDispatch();
    
      return (
        <Autocomplete
          disablePortal
          id="selectAliment"
          options={aliments}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField onSelect={(e)=> dispatch(setAlimentSelected(e.target.value))} {...params} label="Aliments" />}
        />
      );
    }
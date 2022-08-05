import Select from '../../Select/Select';
import Checkbox from '../../CheckBox/CheckBox';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addAliment } from '../../../actions/actions';

import style from './AddAlimentForm.module.css';

const AddAlimentForm = () => {
  const dispatch = useDispatch();
  return (
    <form className={style['aliment__form']} onSubmit={(e) => {
        e.preventDefault();
        dispatch(addAliment())}}>
      <h4>Rechercher un aliment</h4>
        <Select />
        {/* <Checkbox /> */}
        <Button type='submit' variant="outlined">
          Valider
        </Button>
    </form>
  )
}

export default AddAlimentForm
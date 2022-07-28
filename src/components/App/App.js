import './App.css';
import Input from '../Input/Input';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from '../Section/Section';
import Select from '../Select/Select';
import Checkbox from '../CheckBox/CheckBox';
import { Button } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addAliment } from '../../actions/actions';

function App() {
  const alimentsUser = useSelector(state => state.alimentsUser);
  const alimentSelected = useSelector(state => state.alimentSelected);
  const dispatch = useDispatch();
    console.log(alimentSelected);
  return (

    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(addAliment())}}>
      <Select />
      <Checkbox />
      <Button type='submit' variant="outlined">
        Valider
      </Button>
      </form>
      <Section title="Matin" aliments={alimentsUser} />

    </div>

    
  );
}

export default App;

import './App.css';
import Input from '../Input/Input';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from '../Section/Section';
import Select from '../Select/Select';
import Checkbox from '../CheckBox/CheckBox';
import { Button } from '@mui/material';
import { useRef } from 'react';

function App() {

  const alimentsMatin = useSelector(state => state.alimentsMatin);
  const alimentSelected = useSelector(state => state.alimentSelected);
    console.log(alimentSelected);
  return (

    <div className="App">
      {/* <Input /> */}
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(e)}}>
      <Select 
     />
      <Checkbox />
      <Button type='submit' variant="outlined">
        Valider
      </Button>
      </form>
      <Section title="Matin" aliments={alimentsMatin} />

    </div>

    
  );
}

export default App;

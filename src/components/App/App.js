import './App.css';
import { useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from '../Section/Section';
import AddAlimentForm from '../Section/AddAlimentForm/AddAlimentForm';
import Table from '../Section/Table/Table';
import { Button } from '@mui/material';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addAliment } from '../../actions/actions';

function App() {
  const alimentsUser = useSelector(state => state.alimentsUser);
  const alimentSelected = useSelector(state => state.alimentSelected);
  const dispatch = useDispatch();
    console.log(alimentSelected);
  const [sectionCounter, setSectionCounter] = useState(0);


  return (

    <div className="App">
      <AddAlimentForm />
      {/* Ajout d'une nouvelle section  */}
      <form>
        <Button variant='outlined' onClick={() => setSectionCounter(sectionCounter + 1)}>Ajouter une section</Button>
      </form>
      <Section title="Matin" aliments={alimentsUser} />
      <Table /> 
    </div>

    
  );
}

export default App;

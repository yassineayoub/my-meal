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
import CreateAlimentForm from '../Section/CreateAlimentForm/CreateAlimentForm';
import Header from '../Header/Header';
import { TextField } from '@material-ui/core';


function App() {
  const alimentsUser = useSelector(state => state.alimentsUser);
  const alimentSelected = useSelector(state => state.alimentSelected);
  const dispatch = useDispatch();
    console.log(alimentSelected);
  const [inputField, setInputField] = useState('');
  const [meals, setMeals] = useState([{}])

  return (

    <div className="App">
    <Header />
    <form onSubmit={(e) => {
      e.preventDefault();
      setMeals([...meals, {name: inputField}])}}>
      Créer un repas : 
      <TextField label="nom" const value={inputField} onChange={(e) => setInputField(e.currentTarget.value)} />
    </form>
      <AddAlimentForm />
      {meals.map((meal) => <Section title={`${meal.name}`} aliments={alimentsUser} />)}
      {/* <AddAlimentForm />
      <CreateAlimentForm />
     
      <form>
        <Button variant='outlined' onClick={() => setSectionCounter(sectionCounter + 1)}>Ajouter une section</Button>
      </form> */}
      {/* <Section title="Matin" aliments={alimentsUser} /> */}
      {/* <Table />  */}
    </div>

    
  );
}

export default App;

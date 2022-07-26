import './App.css';
import Input from '../Input/Input';
import Generate from '../Generate/Generate';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';

function App() {
  const aliments = useSelector(state => state.aliments);
  return (
    <div className="App">
      <Input />
      <Generate aliments={aliments} />
    </div>
  );
}

export default App;

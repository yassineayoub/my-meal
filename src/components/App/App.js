import './App.css';
import Input from '../Input/Input';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from '../Section/Section';

function App() {
  const alimentsMatin = useSelector(state => state.alimentsMatin);
    console.log(alimentsMatin);
  return (

    <div className="App">
      <Input />
      <Section title="Matin" aliments={alimentsMatin} />
      {/* <Section title="Midi" />
      <Section title="Soir" /> */}
      {/* <Generate aliments={aliments} /> */}

    </div>

    
  );
}

export default App;

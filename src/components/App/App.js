import './App.css';
import Input from '../Input/Input';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from '../Section/Section';
import Select from '../Select/Select';
import Checkbox from '../CheckBox/CheckBox';

function App() {
  const alimentsMatin = useSelector(state => state.alimentsMatin);
    console.log(alimentsMatin);
  return (

    <div className="App">
      {/* <Input /> */}
      <div>
      <Select />
      <Checkbox />
      </div>
      <Section title="Matin" aliments={alimentsMatin} />
      {/* <Section title="Midi" />
      <Section title="Soir" /> */}
      {/* <Generate aliments={aliments} /> */}

    </div>

    
  );
}

export default App;

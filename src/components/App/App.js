import './App.css';
import Input from '../Input/Input';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Section from './Section/Section';


function App() {
  const aliments = useSelector(state => state.aliments);
 
  
  return (
    <div className="App">
      <Input />
      <Section title="Matin">

      </Section>
      {/* <Generate aliments={aliments} /> */}

    </div>
    
  );
}

export default App;

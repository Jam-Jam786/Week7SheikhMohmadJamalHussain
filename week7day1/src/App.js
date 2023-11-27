// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import ColourButton from './ColourButton.js';

function App() {


const [Colours, setColours] = useState(["red", "blue", "green"])
const [Background, setBackground] = useState ("Yellow")


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor : Background}}>
        {Colours.map((col) => {
          return(
            <ColourButton colour = {col} action = {setBackground}/>    
          );
        })}
      </header>
    </div>
  );
}

export default App;

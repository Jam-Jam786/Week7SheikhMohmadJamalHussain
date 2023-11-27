// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import ColourButton from './ColourButton.js';

function App() {

const [Colours, setColours] = useState(["red", "blue", "green"])

  return (
    <div className="App">
      <header className="App-header">
        {Colours.map((col) => {
          return(
            <ColourButton colour = {col}/>    
          );
        })}
      </header>
    </div>
  );
}

export default App;

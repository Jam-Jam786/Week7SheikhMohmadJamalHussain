// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import ColourButton from './ColourButton.js';

function App() {


const [Colours, setColours] = useState(["red", "blue", "green"])

// USTATE CREATED TO HOLD A VALUE
const [Background, setBackground] = useState ("Yellow")


  return (
    <div className="App">
{/* APPLIED A STYLE WITH FUNCTION OF BACKGROUND COLOUR THEN USED THE USTATE TO IT */}
      <header className="App-header" style={{backgroundColor : Background}}>
        {Colours.map((col) => {
          return(
// THEN ADDED A VARIABLE TO ACTION THAT IS THE BACKGROUND 
            <ColourButton colour = {col} action = {setBackground}/>    
          );
        })}
      </header>
    </div>
  );
}

export default App;

// import { useState } from 'react';
import './App.css';
import ColourButton from './ColourButton.js';

function App() {

const ColourList = ["red", "blue", "green"]

  return (
    <div className="App">
      <header className="App-header">
        <ColourButton colour = {ColourList.map}></ColourButton>
      </header>
    </div>
  );
}

export default App;

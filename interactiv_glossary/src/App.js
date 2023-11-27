import { useState } from 'react';
import './App.css';
import Buttons from './InteractiveGlossary.jsx'

// https://www.youtube.com/watch?v=GmuSz6wGW2E


function App() {


    const [array, setArray] = useState[
    {
      title: "String",
      Description: "A string is a data type used in programming, that is used to represent text rather than numbers."
    },
    {
        title: "Sequencing",
        Description: "Sequencing is the specific order in which instructions are performed in an algorithm."
    },
    {
      title: "Variable",
      Description: "Variables are Containers for Storing Data"
    },
    {
      title: "Function",
      Description: "A  function is a block of code designed to perform a particular task. A function is only executed when it is invoked/called."
    },
    {
      title: "Let",
      Description: "The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value."
     },
     {
      title: "Const",
      Description: "declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator"
     }
     ];



  return (

    <div className="App">
      <header className="App-header">


        <div className='answerAndButton-container'>


          <div className='answer-container'>
            <div className='answer'>
              answer
            </div>
          </div>

          <div className='button-container'>
            <div className='buttons-column'>

              {/* {array.map((dataBase) => {
                return(
                  <Button title = {dataBase.title} />
                );
              })} */}
              <Buttons></Buttons>
            </div>
          </div>


        </div>
      </header>
    </div>

  );
}

export default App;

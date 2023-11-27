import './App.css';
import Button from './InteractiveGlossary.jsx'

// string, sequencing, commenting, f-string, and variable

function App() {
  return (

    // const
    // title
    // description
    const Facts = [
    {
      title: "String",
      Description: "A string is a data type used in programming, that is used to represent text rather than numbers."
    }
    {
        title: "Sequencing",
        Description: "Sequencing is the specific order in which instructions are performed in an algorithm."
    }
    {
      title: "Variable",
      Description: "Variables are Containers for Storing Data"
    }
    {
      title: "Function",
      Description: "A  function is a block of code designed to perform a particular task. A function is only executed when it is invoked/called."
    }
    {
      title: "Let",
      Description: "The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value."
     }
     {
      title: "Const",
      Description: "declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator"
     }     
  ]







    <div className="App">
      <header className="App-header">


        <div className='grid-container'>


          <div className='card-container'>
            <div className='card-information'>Card</div>
          </div>

          <div className='button-container'>
            <div className='buttons-column'> <Button></Button> </div>
          </div>


        </div>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Buttons from './InteractiveGlossary.jsx'
import firstPic from './Images/funny-agency-life-creative-designer-copywriter-memes-1.jpg'

// https://www.youtube.com/watch?v=GmuSz6wGW2E


function App() {

  // modify so the button corresponding to the current selected concept has a different style than the rest

    const [concepts, setConcepts] = useState([
    {title: "String",
    description: <p> A string is a data type used in programming, that is used to represent text rather than numbers. </p>,
    image: firstPic
    },
    {title: "Sequencing",
    description: <p>Sequencing is the specific order in which instructions are performed in an algorithm. </p>
    },
    {title: "Variable",
    description: <p>Variables are Containers for Storing Data</p>
    },
    {title: "Function",
    description: <p>A  function is a block of code designed to perform a particular task. A function is only executed when it is invoked/called.</p>
    },
    {title: "Let",
    description: <p>The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.</p>
     },
     {title: "Const",
    description: <p>declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator</p>
     }
     ]);

      let [selectedAction, setSelectiveAction] = useState(concepts[0])
      
      function nextItem(){
        // get current index of the selected item
        let index = concepts.indexOf(selectedAction) + 1
          if(index < concepts.length){
            setSelectiveAction(concepts[index])
          }else{
            setSelectiveAction(concepts[0])
      }

        // add to above, change the selected item to be the next item in the list
        // if the next item doesnt exist, reset to the first item
  return (

    <div className="App">
      <header className="App-header">


        <div className='answerAndButton-container'>


          <div className='answer-container'>
            <div className='description'>
              <h1>{selectedAction.title}</h1>
              <p>{selectedAction.description}</p>
              <img width={"50%"} height={"20%"} src={selectedAction.image} alt="image cannot load" />
              <div className='next' > NEXT </div>
            </div>
          </div>

          <div className='button-container'>
            <div className='buttons-column'>

              {concepts.map((concept) => {
                return(
                <Buttons title = {concept.title} action = {() => {setSelectiveAction (concept)}}/>
                );
              })}
              
            </div>
          </div>


        </div>
      </header>
    </div>

  );
}
}
export default App;

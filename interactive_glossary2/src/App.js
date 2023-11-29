import React, { useState } from 'react';
import './App.css';
import Buttons from './InteractiveGlossary.jsx'
import firstPic from './images/funny-agency-life-creative-designer-copywriter-memes-1.jpg'
import ConceptDisplay from './ConceptDisplay.jsx'


// https://www.youtube.com/watch?v=GmuSz6wGW2E


function App() {
  console.log("test")
  // modify so the button corresponding to the current selected concept has a different style than the rest

    const [concepts, setConcepts] = useState([
    {title: "String",
    description: <p> A string is a data type used in programming, that is used to represent text rather than numbers. </p>,
    image: firstPic,
    complete: false
    },
    {title: "Sequencing",
    description: <p>Sequencing is the specific order in which instructions are performed in an algorithm. </p>,
    complete: false
    },
    {title: "Variable",
    description: <p>Variables are Containers for Storing Data</p>,
    complete: false
    },
    {title: "Function",
    description: <p>A  function is a block of code designed to perform a particular task. A function is only executed when it is invoked/called.</p>,
    complete: false
    },
    {title: "Let",
    description: <p>The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.</p>,
    complete: false
     },
     {title: "Const",
    description: <p>declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator</p>,
    complete: false
     }
     ]);

     let [buttonCounter, SetButtonCounter] = useState(0)

      const [selectedAction, setSelectiveAction] = useState(concepts[0])
      
      function nextItem(){

        // modift the return so if a concept has been completed, its button has a different background colour
        // possible solutions:
        //  using props
        //  a new div with a inline if statement


        // add a counter to the app, in the top right, display 


        // get current index of the selected item
        let index = concepts.indexOf(selectedAction)

          let temp = [...concepts]
          temp[index].complete = true
          console.log(temp)
          setConcepts(temp)

          if(index + 1 < concepts.length){
            setSelectiveAction(concepts[index + 1])
            // SetButtonCounter(+ 1)
          }else{
            setSelectiveAction(concepts[0])

        }}

        // add to above, change the selected item to be the next item in the list
        // if the next item doesnt exist, reset to the first item
  return (

    <div className="App">
      <header className="App-header">


        <div className='answerAndButton-container'>

   

          <ConceptDisplay
          selectedAction={selectedAction}
          nextItem={nextItem}
          SetButtonCounter={SetButtonCounter}
          />
       
          <div className='button-container'>
            <div className='buttons-column'>
              <div className='button-counter'> {buttonCounter} </div>

              {concepts.map((concept) => {
                return(
                <Buttons title = {concept.title} action = {() => {setSelectiveAction (concept)}} complete = {concept.complete}/>

                );
              })}

            </div>
          </div>
      </div>

        
      </header>
    </div>

  );
}

export default App;
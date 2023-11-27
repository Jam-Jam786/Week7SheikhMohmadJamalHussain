import { useState } from 'react';
import'./ColourButton.css'
import App from './App';



function ColourButton(props){
    
    const [Col, setCol] = useState(props.colour)

// console.log(props)

    return(
// ONCLICK ACTION WOULD CHANGE THE ACTION VARIABLE TO COLOUR OF THE BUTTON THAT YOU PRESS ON.
        <div className='ColourButton-container' style={{backgroundColor : Col}} onClick={() => {props.SetBackground (Col)}}>
        Hello World
        </div>
    );
}


export default ColourButton
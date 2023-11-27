import { useState } from 'react';
import'./ColourButton.css'
import App from './App';



function ColourButton(props){
    
    const [Col, setCol] = useState(props.colour)

// console.log(props)

    return(
        <div className='ColourButton-container' style={{backgroundColor : Col}} onClick={() => {props.action(Col)}}>
        Hello World
        </div>
    );
}


export default ColourButton
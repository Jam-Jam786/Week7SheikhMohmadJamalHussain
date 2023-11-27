import { useState } from 'react';
import'./ColourButton.css'



function ColourButton(props){
    
    const [Col, setCol] = useState(props.colour)

// console.log(props)

    return(
        <div className='ColourButton-container' style={{backgroundColor : Col}}>
        Hello World
        </div>
    );
}


export default ColourButton
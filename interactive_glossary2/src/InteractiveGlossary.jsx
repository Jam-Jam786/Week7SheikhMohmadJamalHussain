import { useState } from 'react';
import './InteractiveGlossary.css'


function Buttons(props) {


    // const [buttons, setButtons] = useState();
    return (
        <button style = {{backgroundColor: props.complete ? "red":"yellow"}} className='Button' onClick={props.action}>

        {props.title}

        </button>

    );
}







export default Buttons;
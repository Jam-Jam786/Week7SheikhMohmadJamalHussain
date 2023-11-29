import React, { useState } from 'react';
import './InteractiveGlossary.css';




function ConceptDisplay({selectedAction, nextItem, SetButtonCounter, descriptionbuttonCounter}){
    return(
            <div className='answer-container'>
                <div className='description'>
                    <h1>{selectedAction.title}</h1>
                    <p>{selectedAction.description}</p>
                    <img width={"50%"} height={"20%"} src={selectedAction.image} alt="image cannot load" />
                    <div className='next' onClick = {() => {nextItem(); SetButtonCounter(descriptionbuttonCounter+1);}}>
                    NEXT
                    </div>
                </div>
            </div>
    )
}

export default ConceptDisplay;
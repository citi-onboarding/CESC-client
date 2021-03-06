import React from 'react';
import './style.css';

function SectionComponent(props) {

    return (

        <>

        <div className={`sectionDefault ${props.section}`}>

            <div className='content'>

                <h2 className='titlesection'>{props.titlesection}</h2>
                <p className='text'>{props.text}</p>
            </div>

            {props.children}
            
        </div>
        </>
    )
}

export default SectionComponent;
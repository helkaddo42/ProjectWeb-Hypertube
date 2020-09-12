import React from 'react'
import './toggleButton.css'

function ToggleButton({open}) {

    return (
        <button className='toggle_Button' onClick={open}>
            <div className='line_button'/>
            <div className='line_button'/>
            <div className='line_button'/>
        </button>
    )
}

export default ToggleButton

import React from 'react'
import './toggleButton.css'

function ToggleButton({open,fermer}) {

    return (
        <button className='toggle_Button' onClick={open} onClick={fermer}>
            <div className='line_button'/>
            <div className='line_button'/>
            <div className='line_button'/>
        </button>
    )
}

export default ToggleButton

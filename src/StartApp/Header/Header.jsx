import React from 'react'
import {NavLink} from 'react-router-dom'
import  './header.css'

function Header() {
    return (
            <header>
                <div className='header_title'>
                    <NavLink to='/Home'> <h2> Hypertube </h2></NavLink>
                </div> 
            </header>
            
        
    )
}

export default Header

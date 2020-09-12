import React from 'react'
import ToggleButton from '../SideBar/ToggleButton'
import PictureUser from '../../Picture/user.png'
import {NavLink} from 'react-router-dom';
import './toolbar.css'

function Toolbar({openSide}) {


    return (
    <header className='toolbar'>
        <nav className='toolbar__nav'>

            <div className='buttonShow'> <ToggleButton open={openSide} /></div>
            <div className='toolbar__logo'><a href="/">Hypertube</a></div>
            <div className='space'/>
            <div className='toolbar__items'>
                <ul>
                    <li> <NavLink to='/login'><img src={PictureUser} alt="userLogo"/></NavLink> </li>
                </ul>
            </div>   

        </nav>
    </header>
    )
}

export default Toolbar

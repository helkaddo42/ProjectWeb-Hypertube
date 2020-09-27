import React from 'react'
import ToggleButton from '../SideBar/ToggleButton'
import PictureUser from '../../Picture/user.png'
import {NavLink} from 'react-router-dom';
import './toolbar.css'

function Toolbar({openSide,close}) {


    return (
    <header className='toolbar'>
        <nav className='toolbar__nav'>

            <div className='buttonShow'> <ToggleButton open={openSide} fermer={close} /></div>
            <div className='toolbar__logo'>
                <NavLink to="/Home"> <h2>Hypertube</h2></NavLink>
            </div>
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

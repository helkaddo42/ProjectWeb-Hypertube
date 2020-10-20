import React from 'react'
import {NavLink} from 'react-router-dom';
import './sideBar.css'

function Sidebar() {
    return (
            <nav className='sideBar'>
                <ul>
                    <li> <NavLink to='./Profil'> Connexion </NavLink> </li>
                </ul>
            </nav>
    )
}

 export default Sidebar

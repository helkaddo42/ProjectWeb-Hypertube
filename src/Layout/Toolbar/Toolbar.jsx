import React from 'react'
import ToggleButton from '../SideBar/ToggleButton'
import {NavLink} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './toolbar.css'

function Toolbar(props) {

    const {openSide,close} = props


    return (
    <header className='toolbar'>
        <nav className='toolbar__nav'>

            <div className='buttonShow'> <ToggleButton open={openSide} fermer={close} /></div>
                <div className='toolbar__logo'>
                    <NavLink to="/Home"> <h2>Hypertube</h2></NavLink>
                </div>
            <div className='space'/>
            <div className='toolbar__items'>
                    <IconButton>
                        <NavLink to='/Profil'> <AccountCircle  fontSize='large' className='icon'/></NavLink>
                    </IconButton>   
                    <IconButton>
                        <NavLink to='/Logout' > <ExitToAppIcon  fontSize='large' className='icon'/> </NavLink>
                    </IconButton>   
            </div>   

        </nav>
    </header>
    )
}

export default Toolbar

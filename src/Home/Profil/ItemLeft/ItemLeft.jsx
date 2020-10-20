import React from 'react'
import './itemLeft.css'
import home from  '../../../Picture/return.png'
import identity from  '../../../Picture/identity.png'
import panier from  '../../../Picture/panier.png'
import social from  '../../../Picture/social.png'
import { NavLink } from 'react-router-dom'


function ItemLeft() {
    return (
        <div className='itemLeftProfil'>
            <NavLink to=''> <img src={home} alt="home"/> </NavLink>
            <NavLink to=''> <img src={identity} alt="identity"/> </NavLink>
            <NavLink to=''> <img src={panier} alt="panier"/> </NavLink>
            <NavLink to=''> <img src={social} alt="social"/> </NavLink>
        </div>
    )
}

export default ItemLeft

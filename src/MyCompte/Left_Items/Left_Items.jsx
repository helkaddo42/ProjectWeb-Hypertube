import React from 'react'
import './Left_Items.css'
import home from  './../../Picture/return.png'
import identity from  './../../Picture/identity.png'
import NewsLetter from  './../../Picture/newsLetter.png'
import { NavLink } from 'react-router-dom'


function ItemLeft() {
    return (
        <div className='itemLeftProfil'>
            <NavLink to=''> <img src={home} alt="home"/> </NavLink>
            <NavLink to='/Profil'> <img src={identity} alt="identity"/> </NavLink>
            <NavLink to='/NewsLetter'> <img src={NewsLetter} alt="newsLetter"/> </NavLink>
        </div>
    )
}

export default ItemLeft

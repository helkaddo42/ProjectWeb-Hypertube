import React from 'react'
import './main.css'
import startStream from '../../Picture/btnPlay.png'
import {Link} from 'react-router-dom'

function Main() {
    return (
        <>
        <div className='BgPicture'>
           <Link to='/register'><img src={startStream} alt=''></img></Link>   
        </div>

        </>
    )
}

export default Main

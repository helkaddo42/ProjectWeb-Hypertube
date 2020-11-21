import React from 'react'
import './Profil.css'
import LeftItems from '../Left_Items/Left_Items'
import ImgUser from './ImgUser/ImgUser'
import InfoUser from './InfoUser/InfoUser'
import CBUser from './CBuser/CBuser'
import DeleteAccount from './DeleteAccount/DeleteAccount'

function Profil() {

    return (
        <div className='containerProfil'>
            <div className='leftContainer'>
                <p style={{color:'white', paddingLeft:'15px'}}> Mon compte </p>
                <LeftItems />
            </div>
            <div className='rightContainer'>
                <h3 style={{fontFamily: 'Lexend Peta'}}>Infos perso</h3>
                <p style={{textAlign: 'center',fontFamily: 'Lexend Peta'}}>Renseignez vos coordonnées pour pouvoir passer commande</p>
                <ImgUser />
                <InfoUser />
                <CBUser />
                <DeleteAccount/>
            </div>
        </div>
    )
}

export default Profil
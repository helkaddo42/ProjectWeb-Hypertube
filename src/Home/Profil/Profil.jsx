import React from 'react'
import './profil.css'
import ItemLeft from './ItemLeft/ItemLeft'
import ImgUser from './ImgUser/ImgUser'
import InfoUser from './InfoUser/InfoUser'
import CBUser from './CBuser/CBuser'

function Profil() {
    return (
        <div className='containerProfil'>
            <div className='leftContainer'>
                <p> Mon compte </p>
                <ItemLeft />
            </div>

            <div className='rightContainer'>
                <h3>Infos perso</h3>
                <p>Renseignez vos coordonnées pour pouvoir passer commande</p>
                    <ImgUser />
                    <InfoUser />
                    <CBUser />
            </div>

        </div>
    )
}

export default Profil
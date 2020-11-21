import React from 'react'
import error from './errorPage.module.css'

function ErrorPage({history}) {

    const backSignUp =(value)=>{
       value === 'signIn' ? history.push('/Login') : history.push('/Register') 
    }

    return (
        <div className={error.errorPage}>
            <div className={error.container}>
                <div className={error.titre}> 
                    <h2>Tu t'aventure dans un endroit inconnu, attention HULK rode! <br/></h2> 
                </div>   
                <div className={error.Img}></div>
                <div className={error.Btn}>
                    <div>
                        <button className={error.btnLeft} onClick={()=>backSignUp('signUp')}>Inscription</button>
                    </div>
                    <div>
                        <button className={error.btnRight} onClick={()=>backSignUp('signIn')}>Connexion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage

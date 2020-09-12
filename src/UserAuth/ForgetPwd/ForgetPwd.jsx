import React from 'react'
import './forgetPwd.css'

function ForgetPwd() {
    return (
        <div className='forgetPasswd_form'>
        <div className='container'>  
            <div className='form_left'></div>
            <div className='form_right'>
                    <h2>Mot de passe oublier ?</h2>
                        <form className='form_input'>
    
                                <div className='inputBox'>
                                    <label>Email</label> <br/>
                                    <input id='email' type='email'></input>
                                </div>

                            <button>Recuperer</button>

                        </form>
    
    
            </div>
        </div> 
    </div>    
           
    )
}

export default ForgetPwd

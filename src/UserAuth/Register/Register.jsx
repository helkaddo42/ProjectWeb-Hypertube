import React from 'react'
import {Link} from 'react-router-dom'
import './register.css'


function Register() {

return (

<div className='signUp_form'>
    <div className='container'>  
        <div className='form_left'></div>
        <div className='form_right'>
                <h2>Inscription</h2>
                    <form className='form_input'>

                            <div className='inputBox'>
                                <label>Pseudo</label> <br/>
                                <input id='pseudo' type='text'></input>
                            </div>
                            <div className='inputBox'>
                                <label>Email</label> <br/>
                                <input id='email' type='email'></input>
                            </div>
                            <div className='inputBox '>
                                <label>Password</label> <br/>
                                <input id='password' type='password'></input>
                            </div>
                            <div className='inputBox '>
                                <label>Password</label> <br/>
                                <input id='password' type='password'></input>
                            </div>

                            <button>Inscription</button>

                    </form>


                        <div className='linkContainer'>
                                <Link to='/login' className='simpleLink'> déja inscrit ? connectez-vous</Link>
                        </div>

        </div>
    </div> 
</div>    
        
    )
       
}

export default Register
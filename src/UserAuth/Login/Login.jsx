import React from 'react'
import {Link} from 'react-router-dom'
import  './login.css'

function Login() {

return (
<div className='signIn_form1'>
    <div className='container1'>  
        <div className='form_left1'></div>
        <div className='form_right1'>
                <h2>Connexion</h2>
                    <form className='form_input1'>

                            <div className='inputBox1'>
                                <label>Email</label> <br/>
                                <input id='email' type='email'></input>
                            </div>
                            <div className='inputBox1 '>
                                <label>Password</label> <br/>
                                <input id='password' type='password'></input>
                            </div>

                            <button>Connexion</button>


                    </form>


                        <div className='linkContainer1'>
                                <Link to='/ForgetPwd' className='simpleLink1'> Mot de passe oublier ?</Link>
                        </div>

        </div>
    </div> 
</div>    
       
    )
}

export default Login

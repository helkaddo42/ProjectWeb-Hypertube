import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as regex from '../Utility/Regex'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import ImgSignUp from '../../Picture/return.png'
import './forgetPwd.css'

toast.configure();

function ForgetPwd({history}) {


    const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

    const [messageError] = useState("Votre adresse mail n'est pas valide")
    const [email, setEmail] = useState('')
    const [errorRegex, setErrorRegex] = useState('')

    useEffect(() => {if(email===''){setErrorRegex('')}},[email])

    const dataInput =(e)=>{
        const valueInput = e.target.value
        
        valueInput.match(regex.email) ? setErrorRegex('') : setErrorRegex('error')

        setEmail(valueInput)
    }

    const dataEmail = {"requestType":"PASSWORD_RESET", email }

    const handleSubmit =(e)=>{
        e.preventDefault()

        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${FIREBASE_API_KEY}`,dataEmail).then(()=>{
            
        toast.success(`un mail a étè envoyer a ${email}`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});
        setTimeout(() => {
            history.push('/Login')
        }, 2000);

        }).catch((err)=>{
            toast.error("Adresse email inconnu.", 
            {position: "top-right", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});
        })
    }

    const btnDisplay = errorRegex !== 'error' && email.length >= 7 ? (<button className='sendData'>Recuperer</button>) : (<button disabled>Recuperer</button>)
    const errorMessage = errorRegex && (<h3 style={{ color: 'red', fontStyle: 'italic'}}> {messageError}</h3>)

    return (
        <div className='forgetPasswd_form2'>
        <div className='container2'>  
            <div className='form_left2'></div>
            <div className='form_right2'>
            <div className='returnSignUp'> <Link to='/Login'>  <img src={ImgSignUp} alt=""/>  </Link> </div>

                <p>Utilise ton Joker, en indiquant ton adresse mail !</p>
                    <h2>Mot de passe oublier ?</h2>
                        {errorMessage}
                        <form className='form_input2' onSubmit={handleSubmit}>
    
                                <div className='inputBox2'>
                                    <label>Email</label> <br/>
                                    <input id='email2' type='email'  minLength="7" maxLength="30"
                                    placeholder='indiquer votre email'
                                    onChange={dataInput}></input>
                                </div>

                                {btnDisplay}

                        </form>
{/* 
                        <div className='linkContainer2'>
                                <Link to='/Login' className='simpleLink2'>Revenir à la page précédente</Link>
                        </div> */}

    
    
            </div>
        </div> 
    </div>    
           
    )
}

export default React.memo(ForgetPwd)

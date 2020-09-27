import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as regex from '../Utility/Regex'
import axios from 'axios'
import { toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import pwd from '../../Picture/password.png'
import  './login.css'

toast.configure();

function Login({history}) {

    const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

    const errorData ={ email: 'Votre adresse mail n\'est pas valide', password: 'Au moins: 1Min, 1Maj et 1chiffre'}

    const [messageError] = useState(errorData)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [inputName, setInputName] = useState('')
    const [loginUser, setLoginUser] = useState('')

    useEffect(() => {
       if(email === '' && password === ''){setInputName('')}
        
    }, [email,password])

const dataInput =(e)=>{
    
    const valueInput = e.target.value
    const nameInput = e.target.id

    valueInput.match(regex[nameInput]) ? setInputName('') : setInputName(nameInput)
    
    cleanedValue(valueInput, nameInput)
}

const cleanedValue =(value,name)=> name === 'email' ? setEmail(value) : setPassword(value)

const dataSignIn = { email, password, returnSecureToken: true }

const handleSubmit =(e)=>{
    e.preventDefault()

    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, dataSignIn).then((response)=>{

        localStorage.setItem('idToken',response.data.idToken)
        localStorage.setItem('localId',response.data.localId)
        const uid = response.data.localId

        axios.get(`https://hypertube-6cd18.firebaseio.com/users/${uid}.json`).then(infoUser =>{
        const user = infoUser.data.login
        setLoginUser(user)
        toast.dark(`Bienvenue a toi ${user.toUpperCase()} :-)`, {position: "top-right",transition:Flip, autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});
        })
        setTimeout(() => {
            history.push('/Home')
            window.location.reload()
        }, 2000);
        
    }).catch(()=>{
        toast.error("L'adresse email ou le mot de passe inconnu.", 
        {position: "top-right", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});
    })
}

console.log('3',loginUser)


const errorMessage = inputName &&  (<h3 style={{ color: 'red',fontStyle: 'italic'}}> {messageError[inputName]}</h3>)
const btnDisplay = inputName === '' &&  email.length >= 7 && password.length >= 6 ? (<button className='finish'>Connexion</button>) : (<button disabled>Connexion</button>)


return (
<div className='signIn_form1'>
    <div className='container1'>  
        <div className='form_left1'></div>
        <div className='form_right1'>
        <div className='returnSignIn'> <Link to='/ForgetPwd'>  <img src={pwd} alt=""/>  </Link> </div>

                <h2>Connexion</h2>
                    <form className='form_input1' onSubmit={handleSubmit}>
                            {errorMessage}
                            <div className='inputBox1'>
                                <label>Email</label> <br/>
                                <input id='email' type='email' minLength="7" maxLength="30" 
                                placeholder='indiquer votre email'
                                onChange={dataInput}></input>
                            </div>
                            <div className='inputBox1 '>
                                <label>Password</label> <br/>
                                <input id='password' type='password' minLength="6" maxLength="20"
                                placeholder='contient au moins 6 caractéres'
                                onChange={dataInput}></input>
                            </div>

                            { btnDisplay }


                    </form>


                        <div className='linkContainer1'>
                                <Link to='/Register' className='simpleLink1'> Revenir à la page précédente</Link>
                        </div>

        </div>
    </div> 
</div>    
       
    )
}

export default Login

import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as regex from '../Utility/Regex'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import ImgSignIn from '../../Picture/connexion.png'
import './register.css'

toast.configure();


function Register({history}) {

    const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY

    const storeData={   login:'',
                        email:'',
                        password:'',
                        confirmPassword:'',
                    }

    const errorData={  login: '4 caracteres min speciaux, chiffres refuser',
                        email: 'Votre adresse mail n\'est pas valide',
                        password: 'Au moins: 1Min, 1Maj et 1chiffre' ,
                        confirmPassword: 'Au moins: 1 Min, 1 Maj et 1 chiffre'
                    }


    const [data, setData] = useState(storeData)
    const [messageError] = useState(errorData)
    const [inputName, setInputName] = useState('')
    const [matchPwd, setMatchPwd] = useState('')

    const {login , email , password , confirmPassword} = data


    useEffect(() => {
       const resultMatch = password === confirmPassword ? false : true;
       setMatchPwd(resultMatch);
       if(login === '' && email === '' && password === '' && confirmPassword === ''){setInputName('')}
    }, [data])


    const dataInput =(e)=>{

        const valueInput = e.target.value
        const nameInput = e.target.id

        valueInput.match(regex[nameInput]) ? setInputName('') : setInputName(nameInput)
        
        cleanedValue(valueInput, nameInput)
    }

    const cleanedValue =(value,name)=> setData({...data, [name]: value })

    const dataSignUp = { email, password, returnSecureToken: true }
    const userLogin ={ login , email }

    const handleSubmit =(e)=>{
        e.preventDefault()

        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,dataSignUp ).then((response)=>{
            
            const uid = response.data.localId
            axios.put(`https://hypertube-6cd18.firebaseio.com/users/${uid}.json`,userLogin)

            toast.info(`votre compte a bien étè creer ${login}`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});
            setTimeout(() => { history.push('/Login') }, 2000);
            
        }).catch((err)=>{
            toast.error(`adresse mail existante`, {position: "top-center", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined});

        })
    }

    const errorMessage = inputName &&  (<p style={{ color: 'red',fontStyle: 'italic'}}> {messageError[inputName]}</p>)
    const messageMatchPwd = matchPwd &&  (<p style={{ color: '#0000FF',fontStyle: 'italic'}}>Les mots de passes doivent etre identique !</p>)
    const btnDisplay = inputName === '' && password === confirmPassword && login.length >= 4 && email.length >= 7 && password.length >= 6 && confirmPassword.length >= 6 ? 
    (<button className='submit'>Inscription</button>) : (<button disabled>Inscription</button>)

return (

<div className='signUp_form'>
    <div className='container'>  
        <div className='form_left'></div>
        <div className='form_right'>
        <div className='userSign'> <Link to='/Login'>  <img src={ImgSignIn} alt=""/> </Link> </div>

                <h2>Inscription</h2>
                    <form className='form_input' onSubmit={handleSubmit}>

                            {errorMessage}
                            <div className='inputBox'>
                                <label>Login</label> <br/>
                                <input id='login' type='text' 
                                 minLength='4' maxLength='8'
                                 placeholder='contient au moins 4 caractéres'
                                onChange={dataInput}/>
                                
                            </div>
                            <div className='inputBox'>
                                <label>Email</label> <br/>
                                <input  id='email' type='email'
                                        minLength="7" maxLength="30"
                                        placeholder='indiquer votre email'
                                onChange={dataInput}/>
                            </div>
                            <div className='inputBox '>
                                <label>Password</label> <br/>
                                <input  id='password' type='password' 
                                        minLength="6" maxLength="20"
                                        placeholder='contient au moins 6 caractéres'
                                onChange={dataInput}/>
                                {messageMatchPwd}
                            </div>
                            <div className='inputBox '>
                                <label>Confirm Password</label> <br/>
                                <input  id='confirmPassword' type='password' 
                                        minLength="6" maxLength="20"
                                        placeholder='contient au moins 6 caractéres'
                                onChange={dataInput}/>
                                {messageMatchPwd}
                            </div> 

                                {btnDisplay}

                    </form>


                        <div className='linkContainer'>
                                <Link to='/Login' className='simpleLink'> déja inscrit ? connectez-vous</Link>
                        </div>

        </div>
    </div> 
</div>    
        
    )
       
}

export default React.memo(Register)
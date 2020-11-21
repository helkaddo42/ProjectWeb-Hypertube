import React,{useState,useEffect} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import {Form,Input,Button } from 'muicss/react'
import { toast} from 'react-toastify';
import axios from 'axios'
import './cbuser.css'
toast.configure();

function CBuser() {

    const [uid, setUid] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
       setUid(localStorage.getItem('localId'))
       axios.get(`https://hypertube-6cd18.firebaseio.com/${localStorage.getItem('localId')}/carteBleu.json`)
       .then(response =>{
           setCvc(response.data.cvc)
           setName(response.data.name)
           setNumber(response.data.number)
           setExpiry(response.data.expiry)
        }).catch(err=>{
            // console.log(err)
        })
    }, [])
   
    const handleSubmit =e=>{
        e.preventDefault()
        const blueCard={ cvc, name, number, expiry }

        axios.put(`https://hypertube-6cd18.firebaseio.com/${uid}/carteBleu.json`,blueCard)
        .then(response=>{
            toast.success(`vos coordonnées bancaires ont étè enregistrées avec succès `, {position: "top-right", autoClose: 3000, hideProgressBar: false,closeOnClick: true,pauseOnHover: false,progress: undefined})
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        <div className='blockBlueCard' >
            <div className='title'>
                <h4 style={{color:'white',fontFamily: 'Lexend Peta',fontSize:'20px'}}> Coordonnées bancaires  </h4>
            </div>
            <div className='contentCb'>
                    <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} />
                    <Form className='InputCartebleu' onSubmit={handleSubmit}>
                                <Input  label="Card Number" minLength="16" maxLength="16"  value={number} onChange={e=> setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} pattern ="[0-9]+" title="please enter number only" required type='tel'  name='number' floatingLabel={true} />
                                <Input  label="Name" minLength="2" maxLength="25"  value={name} onChange={e=> setName(e.target.value)} onFocus={e => setFocus(e.target.name)}  pattern="^[A-Za-z -]+$" title="please enter letters only" type="text" required  floatingLabel={true} />
                                <Input  label="Date expiry" minLength="4" maxLength="4"  value={expiry} onChange={e=> setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} pattern ="[0-9]+" title="please enter number only"  required  type="text" name ='expiry' floatingLabel={true} />
                                <Input  label="CVC" minLength="3" maxLength="3"  value={cvc} onChange={e=> setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} pattern ="[0-9]+" title="please enter number only"  type="tel" name='cvc' required  floatingLabel={true} />
                                
                                <div className='buttonUserCarteBleu'>
                                    <Button  className='buttonCarteBleu' variant="raised" style={{textAlign:'center'}}>Submit</Button>
                                </div>
                    </Form>
                        
            </div>
        </div> 
    )
}

export default CBuser

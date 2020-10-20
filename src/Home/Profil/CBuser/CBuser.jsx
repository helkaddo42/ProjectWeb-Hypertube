import React,{useState,useEffect} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import {Form,Input,Button } from 'muicss/react'
import axios from 'axios'
import './cbuser.css'

function CBuser() {

    const [uid, setUid] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
       setUid(localStorage.getItem('localId'))
        
    }, [])
   
    console.log(uid)

    const handleSubmit =e=>{
        e.preventDefault()
        const blueCard={ cvc, name, number, expiry }


        axios.put(`https://hypertube-6cd18.firebaseio.com/users/${uid}/carteBleu.json`,blueCard).then(response=>{
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })

    }


    return (
        <div className='blockBlueCard' >
            <div className='title'>
                <h4> Coordonnées bancaires  </h4>
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

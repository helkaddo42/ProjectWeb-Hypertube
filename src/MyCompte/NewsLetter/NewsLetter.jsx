import React,{useState,useEffect} from 'react'
import './newsLetter.css'
import LeftItems from '../Left_Items/Left_Items'
import Switch from "react-switch";
import emailjs from 'emailjs-com';
import axios from 'axios';
import { toast} from 'react-toastify';
toast.configure();

function NewsLetter() {

    const [news, setNews] = useState(false)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')

    useEffect(() => {
         
        axios.get(`https://hypertube-6cd18.firebaseio.com/${localStorage.getItem('localId')}/users.json`)
        .then(response =>{
            setName(response.data.firstName)
            setMail(response.data.email)})
        axios.get(`https://hypertube-6cd18.firebaseio.com/${localStorage.getItem('localId')}/Newsletter.json`)
        .then(response=>{
            setNews(response.data.value)
        })
    }, [])

    useEffect(() => {
        if(news){
            const valueNews={value: true}
            axios.put(`https://hypertube-6cd18.firebaseio.com/${localStorage.getItem('localId')}/Newsletter.json`,valueNews)

            const templateParams ={
                name: name,
                email: mail
            } 

            emailjs.send('service_zqomxtc','template_q5iv6m5',templateParams,'user_pdXIIKrmUuVWMAxexdfLi').then((result) => { })

        }
        else{
            const valueNews={value: false}
            axios.put(`https://hypertube-6cd18.firebaseio.com/${localStorage.getItem('localId')}/Newsletter.json`,valueNews).then(response =>{

            })
        }
    }, [news])

    return (
        <div className='containerProfil'>
            <div className='leftContainer'>
                <p style={{color:'white', paddingLeft:'15px'}}> Mon compte </p>
                <LeftItems />
            </div>

            <div className='rightContainer'>
                <h3 style={{fontFamily: 'Lexend Peta'}}>NewsLetter</h3>
                <p style={{textAlign: 'center',fontFamily: 'Lexend Peta'}}>Renstons en contact et profiter des films en avant premieres </p>
                <div className='news_content'>
                    <div className='news_Title'>
                        <h4> NewsLetters </h4>
                    </div>
                    <div className='news_Letter'>
                        <div className='news_Paragraphe'>
                            <p id="textAdvice"> Pour vous permettre d'être à la page des nouveautés, pensez à y souscrire  </p>
                        </div>
                        <div className='news_Switch'>
                            <Switch onChange={()=>setNews(!news)}  checked={news} />
                            
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter




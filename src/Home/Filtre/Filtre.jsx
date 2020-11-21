import React,{useState,useEffect} from 'react'
import './filtre.css'
import axios from 'axios'

function Filtre({idClick}) {

    const [genre, setGenre] = useState([])

    useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=80293e0217053d0767442c692293745b&language=en-fr`)
       .then(res=>{
            setGenre(res.data.genres)
        })
    }, [])

    const movieGenre = (
        <ul className="ulGenre">
            { genre.map(element=>{
                return(
                    <li className="liGenre" id={element.id} key={element.id} onClick={idClick}> {element.name} </li>
                    )
                }) 
            }
        </ul>
    )
   
    return (
        <div className='filtre'>
            {movieGenre}
        </div>
    )
}

export default Filtre

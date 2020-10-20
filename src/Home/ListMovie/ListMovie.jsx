import React,{useEffect} from 'react'
import axios from 'axios'
import './listMovie.css'

function ListMovie() {

    useEffect(() => {
     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80293e0217053d0767442c692293745b&language=fr&page=1&include_adult=false`).then((response)=>
        { console.log(response)}
     ).catch(err =>{
         console.log(err)
     })
    }, [])



    return (
        <div className='movieList'>
            
        </div>
    )
}

export default ListMovie

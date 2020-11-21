import React,{useState,useEffect} from 'react'
import './movieCard.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'

function MovieCard({redirect,idGenre,search}) {

    
    const [movie, setMovie] = useState([])
    const [pageMovie, setPageMovie] = useState(null)

    // partie montage
    useEffect(() => {
        if(localStorage.getItem('genre')){
                // console.log('montage des film avec genre')
        }else(
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80293e0217053d0767442c692293745b&language=fr&page=1&include_adult=false`)
            .then((response)=>{
                const data = response.data.results.filter(movie => movie.poster_path !== null);
                setMovie(data)
                setPageMovie(response.data.page)
            })
        )  
    }, [])

    // partie incrementation de la page 

    useEffect(() => {
        // console.log('page +1 ')
        if(pageMovie > 1 && idGenre )
        {
            // console.log('page filtre suivante')
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80293e0217053d0767442c692293745b&language=fr&page=${pageMovie}&include_adult=false&with_genres=${idGenre}`).then(res=>{
                const nextMovie = res.data.results.filter(movie => movie.poster_path !== null);
                setMovie( movie =>[...movie,...nextMovie])
            })
        }else if(pageMovie > 1 && search  ){
            // console.log('recherche film, page suivamte')
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=80293e0217053d0767442c692293745b&language=en-US&query=${search}&page=${pageMovie}&include_adult=false`).then(res=>{
            const nextMovie = res.data.results.filter(movie => movie.poster_path !== null);
            setMovie( movie =>[...movie, ...nextMovie])
         })
        
        }else if(pageMovie > 1 && !search && !idGenre && !localStorage.getItem('genre')  ){
                // console.log('page popular suivamte')
                axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=80293e0217053d0767442c692293745b&language=fr&page=${pageMovie}&include_adult=false`).then(res=>{
                const nextMovie = res.data.results.filter(movie => movie.poster_path !== null);
                setMovie( movie =>[...movie,...nextMovie])
                })
        }else if(localStorage.getItem('genre') && !idGenre && !search){
            // console.log('page +1 genre apres montage')
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80293e0217053d0767442c692293745b&language=fr&page=${localStorage.getItem('page')}&include_adult=false&with_genres=${localStorage.getItem('genre')}`).then(res=>{
                const nextMovie = res.data.results.filter(movie => movie.poster_path !== null);
                setMovie( movie =>[...movie,...nextMovie])
        })
        }

     }, [pageMovie])

     





    useEffect(() => {
        if(!!idGenre ){ 
                // console.log('cliquer sur le filtre')
                localStorage.setItem('genre',idGenre)
                localStorage.setItem('page',pageMovie)
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80293e0217053d0767442c692293745b&language=fr&page=1&include_adult=false&with_genres=${idGenre}`).then(res=>{
                    const data = res.data.results.filter(movie => movie.poster_path !== null);
                    setMovie(data)
                })
            }
      
    }, [idGenre])

    useEffect(() => {
         if(!!search){
             console.log(search)
            // console.log('recherche de film')
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=80293e0217053d0767442c692293745b&language=en-US&query=${search}&page=1&include_adult=false`).then(res=>{
                const data = res.data.results.filter(movie => movie.poster_path !== null);
                setMovie(data)
            })
        }
    }, [search])



    useEffect(() => {
       if(localStorage.getItem('genre') && !idGenre && !search ){
        //    console.log('genre apres montage => did update')
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80293e0217053d0767442c692293745b&language=fr&page=${localStorage.getItem('genre')}&include_adult=false&with_genres=${idGenre}`).then(res=>{
                const data = res.data.results.filter(movie => movie.poster_path !== null);
                setMovie(data)
        })
       }
    }, [localStorage.getItem('genre')])






    // partie variable dynamique
    const movieDetail =(e)=>{
        const id = e.target.id
        redirect.history.push(`/Movie/${id}`)
    }

    

    const poster=  movie.map((element) =>{ return <img className='cardMovie' key={element.id} onClick={e=>movieDetail(e)}   alt='card' id={element.id} src={`https://image.tmdb.org/t/p/w185`+element.poster_path}></img> })

    return (
   

        <InfiniteScroll
        dataLength={movie} 
        next={()=>setPageMovie(pageMovie + 1)}
        hasMore={true} 
        >
             <div className='mainCard'>
            {poster}
            </div>
        
        </InfiniteScroll>
        
    )
}

export default MovieCard


import React,{useState} from 'react'
import CarouselImg from './Carousel/Carousel'
import SearchBar from './SearchBar/SearchBar'
import ListMovie from './ListMovie/ListMovie'
import Filtre from './Filtre/Filtre'
import  './home.css'

function Home(props) {

    const [id, setId] = useState('')
    const [movieSearch, setMovieSearch] = useState('')

    const idClick =(e) => {
        setMovieSearch('')
        setId(e.target.id)
    }

    const movie =(textSearch) => {
        setId('')
        setMovieSearch(textSearch)
    }
    
    return (
        <div className='home'>
            <CarouselImg />
            <SearchBar searchClick={movie} />
            <Filtre idClick={idClick} />
            <ListMovie history={props} searchMovie={movieSearch} idMovie={id} />
        </div>
    )
}

export default Home

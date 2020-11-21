import React from 'react'
import MovieCard from './movieCard/MovieCard'
import './listMovie.css'

function ListMovie({history,idMovie,searchMovie}) {
    return (
        <div className='movieList'>
            <MovieCard search={searchMovie} idGenre={idMovie} redirect={history} />
        </div>
    )
}

export default ListMovie

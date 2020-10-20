import React from 'react'
import CarouselImg from './Carousel/Carousel'
import SearchBar from './SearchBar/SearchBar'
import ListMovie from './ListMovie/ListMovie'
import  './home.css'


function Home() {
    return (
        <div className='home'>
                <CarouselImg />
                <SearchBar />
                <ListMovie />
        </div>
    )
}

export default Home

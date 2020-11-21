import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Video from './Video/Video';
import { Container } from 'react-bootstrap';
import Presentation from './Presentation/Presentation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Movie.css';

class MovieId extends Component {
    _isMounted = false;
    state = {
        movie : ''
    };

    componentDidMount () {
        window.scrollTo(0, 0);
        Aos.init();
        this._isMounted = true;
        if (this._isMounted)
            this.infoMovie();
    };

    componentDidUpdate (prevProps) {
        window.scrollTo(0, 0);
        if (this.props.match.params.id !== prevProps.match.params.id)
            this.infoMovie();
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    infoMovie = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=1e32f5c452c2267d5367589e9864ab1c&append_to_response=videos,credits,similar&language=fr`)
        .then(response => {
            let acteurs = response.data.credits.cast.splice(0, 4);
            acteurs = acteurs.map(acteur => {
                return {...acteur,
                    img: true
                }
            }) 
            let youtubeKey = null
            if (response.data.videos.results.length !== 0)
                youtubeKey = response.data.videos.results[0].key
            let data = {...response.data, release_date: response.data.release_date.substr(0, 4), acteurs : acteurs, youtubeKey : youtubeKey }
            this.setState({movie: data})
            }
        )
        .catch(err => {})
    };

    submit = (e) => {
        e.preventDefault();
    };

    render () { 
        let movieBackdropStyles = null;
        if (!!this.state.movie.backdrop_path) {
            movieBackdropStyles = {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                minHeight:'100vh',
                backgroundColor: 'black',
                backgroundPosition:'center' 
            };
        }

        return (
            <div className="Page" style={movieBackdropStyles}>
                <Container className='Container'>
                    <div data-aos="flip-left" data-aos-once data-aos-duration="3000">
                        {this.state.movie && <Presentation movie={this.state.movie}/>}
                        {this.state.movie && <Video id={this.state.movie.youtubeKey}/>}
                    </div>
                </Container>
            </div>
        );
    };
};

export default withRouter(MovieId);

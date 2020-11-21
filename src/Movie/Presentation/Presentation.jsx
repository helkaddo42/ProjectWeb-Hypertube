import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
// import Modal from './Modal/Modal';
import Rubrique from './Rubrique/Rubrique';
import Rubrique2 from './Rubrique2/Rubrique2';
// import { FaEye } from "react-icons/fa";
// import noFilm from '../../../assets/noAffiche.png'
import './Presentation.css';
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Presentation = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={4}>
                    {props.movie.poster_path &&<Image style={{ width: "100%", height: "auto" }} src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={`poster ${props.movie.title}`}/>}
                  
                </Col>
                <Col sm={12} md={8}>
                    <Row>
                        <Col sm={12} md={9} style={{marginTop:'10px'}}> 
                            <h1 className="TitreMovie2" style={{fontSize:'40px'}}>{props.movie.title} {props.movie.release_date && <span style={{fontStyle: 'italic', fontSize:'30px'}}>({props.movie.release_date})</span>} </h1>
                            <h5 className="TaglineMovie2">{props.movie.tagline}</h5>
                        </Col>
                        <Col sm={12} md={3}> 
                            <CircularProgressbar
                                value={props.movie.vote_average*10}
                                text={`${props.movie.vote_average*10}% `}
                                strokeWidth={10}
                                className="ProgressBar"
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    trailColor: "#fff",
                                    textSize: '30px',
                                })}
                            />
                            <p style={{textAlign:'center'}}>Note</p>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'17px'}}>
                        <Rubrique2 title="Durée" data={props.movie.runtime} min="min"/>
                        <Rubrique2 title="Popularité" data={props.movie.popularity}/>
                        {props.movie.production_countries[0] && <Rubrique2 title="Pays" data={props.movie.production_countries[0].iso_3166_1}/>}
                    </Row>
                    <Rubrique title='Genre' data={props.movie.genres} css="LiMovie" map={true}/>
                    <Rubrique title='Acteurs' data={props.movie.acteurs} map={true} img={true}/>
                    <Rubrique title='Synopisis' data={props.movie.overview}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Presentation;

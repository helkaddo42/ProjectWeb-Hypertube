import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Img from './../../../Picture/acteurs.png';
import './Rubrique.css';

const Rubrique = (props) => {
    let data = null;

    if (props.data.length === 0)
        data = <p style={{fontStyle:'italic'}}>indisponible</p>
    else if (props.map) {       
        data = (
            <Row className="LuMovie">
                {
                    props.data.map(data => (
                        <Col sm={3} key={data.id} style={{display:'flex', flexDirection:'column'}}>                           
                            { data.profile_path &&  
                                <a href={`https://www.themoviedb.org/person/${data.id}`} target="_blank" rel="noopener noreferrer" className="ARubrique">
                                    <img className="ImgRubrique" src={`https://image.tmdb.org/t/p/w100_and_h100_face/${data.profile_path}`}  alt='444'/>
                                </a> }
                            { !data.profile_path && data.img &&
                                <a href={`https://www.themoviedb.org/person/${data.id}`} target="_blank" rel="noopener noreferrer" className="ARubrique">
                                    <img alt= "" src={Img} className="NoImgRubrique"/> 
                                </a> }    
                            <p className={props.css} style={{textAlign:'center'}}>{data.name}</p>
                        </Col>
                        )
                    )
                }
            </Row>
        );
    }
    else 
        data = props.data;
    
    return (
        <Row>
            <Col>
                <p className='TitreMovie'>{props.title}</p>
                {data} 
            </Col>
        </Row>
    )
}

export default Rubrique;
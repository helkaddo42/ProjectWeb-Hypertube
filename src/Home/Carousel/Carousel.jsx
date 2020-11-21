import React from 'react'
import titan from '../../Picture/titan.jpg'
import parrain from '../../Picture/parrain.jpg'
import matrix from '../../Picture/matrix.jpg'
import {Carousel }from 'react-bootstrap'
import '../home.css'

function CarouselImg() {
    return (
        <div className='dynamicImg'>
            <Carousel  style={{width:'100%',margin:'auto'}} indicators={false} controls={false} >
                <Carousel.Item interval={1000} >
                    <Carousel.Caption>
                        <Carousel.Item interval={1000}></Carousel.Item>
                    </Carousel.Caption>
                    <img  style={{borderRadius:'50px'}} className="d-block w-100"  height={450}  src={titan} alt="First slide" /> 
                </Carousel.Item>
                <Carousel.Item interval={500}>
                        <img  style={{borderRadius:'50px'}} className="d-block w-100"   height={450}  src={parrain} alt="Third slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img  style={{borderRadius:'50px'}} className="d-block w-100"  height={450}   src={matrix} alt="Third slide" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselImg

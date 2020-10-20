import React from 'react'
import titan from '../../Picture/titan.jpg'
import parrain from '../../Picture/parrain.jpg'
import matrix from '../../Picture/matrix.jpg'
import {Carousel }from 'react-bootstrap'
import '../home.css'

function CarouselImg() {
    return (
        <div className='dynamicImg'>
            <Carousel  style={{width:'100%',margin:'auto'}} >
                <Carousel.Item interval={1000} >
                <Carousel.Caption>
                            <h3> Es tu prêt</h3>
                <Carousel.Item interval={1000} ></Carousel.Item>
                        </Carousel.Caption>
                            <img className="d-block w-100"  height={450}  src={titan} alt="First slide" />
                       
                </Carousel.Item>

                <Carousel.Item interval={500}>
                        <img className="d-block w-100"   height={450}  src={parrain} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Mafia italienne</h3>
                    </Carousel.Caption>
                </Carousel.Item> 

                <Carousel.Item>
                    <img className="d-block w-100"  height={450}   src={matrix} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Assied toi et profite </h3>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default CarouselImg

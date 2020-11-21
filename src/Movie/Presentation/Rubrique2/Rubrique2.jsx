import React from 'react';
import { Col } from 'react-bootstrap';

const Rubrique2 = (props) => (
    <Col sm={12} md={4}>
        <p className='TitreMovie'>{props.title}</p>
        <p>{props.data} {props.min}</p>
    </Col>
)

export default Rubrique2;
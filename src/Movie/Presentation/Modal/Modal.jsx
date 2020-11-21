import React, { useState} from 'react';
import Video from '../../Video/Video';
import { Modal, ButtonToolbar } from 'react-bootstrap';
import { FaFilm } from "react-icons/fa";
import './Modal.css';
import MyButton from '../../../../components/MyButton/MyButton'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className="close">
                <Modal.Title id="contained-modal-title-vcenter" style={{color:'black'}}>
                    Trailer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Video id={props.id}/>
            </Modal.Body>
        </Modal>
    );
}

const MyModal = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <ButtonToolbar>
            <MyButton value={<div><FaFilm style={{marginRight:"20px"}}/>Regarder le Trailer</div>} clicked={() => setModalShow(true)}/>
            <MyVerticallyCenteredModal show={modalShow} id={props.id} onHide={() => setModalShow(false)}/>
        </ButtonToolbar>
    );
}
 
export default MyModal;
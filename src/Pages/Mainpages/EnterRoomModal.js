import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import WritingRoom from '../WritingRoom.js';
import { fontSize } from '@material-ui/system';


export class AlarmModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">작성방 입장
                              </Modal.Title>
            </Modal.Header>
            <Modal.Body>작성방에 입장하시겠습니까?</Modal.Body>
            <Modal.Footer>
                    <Button className="primary-btn"><Link to="/writingroom" style={{
                        fontSize: 15, color: 'white'
                    }}>작성방으로</Link></Button>
                    <Button className="secondary-btn" onClick={this.props.toggle}>닫기</Button>
                </Modal.Footer>
                <Route path="/writingroom" component={WritingRoom} />
                  </Modal >
        );
    }
}
export default AlarmModal;

import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                    <Modal.Title id="contained-modal-title-vcenter">알림
                              </Modal.Title>
            </Modal.Header>
            <Modal.Body>작성방 신청이 승인 되었습니다!</Modal.Body>
            <Modal.Footer>
                    <Button className="primary-btn"><Link to="/writingroom" style={{
                        fontSize: 15, color: 'white'
                    }}>작성방으로</Link></Button>
                    <Button className="secondary-btn" onClick={this.props.toggle}>닫기</Button>
                </Modal.Footer>
                  </Modal >
        );
    }
}
export default AlarmModal;

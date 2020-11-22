 import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import '../../../style/Modal.css';


export class EditProfileModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        프로필 수정
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-4">
                            <button style={{ width: '200px', height: '200px' }}>프로필 사진</button>
                        </div>
                        <div className="col-6">
                            <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                프로필 이름
                            </div>
                            <div>
                        <input type="text" style={{ width: '100%', marginBottom: '5px' }} />
                    </div>
                            <div className="row" style={{ marginTop: '10px' }}>
                        관심분야
                        </div>
                    <div className="row">
                                <input type="radio" value="소설" className="genre"/> 소설    
                                <input type="radio" value="판타지" className="genre" /> 판타지
                                <input type="radio" value="만화" className="genre" /> 만화
                                <input type="radio" value="드라마" className="genre"/> 드라마
                    </div>
                        </div>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn" onClick={this.props.toggle}>프로필 수정하기</Button>
                    <Button className="secondary-btn" onClick={this.props.toggle}>닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default EditProfileModal;

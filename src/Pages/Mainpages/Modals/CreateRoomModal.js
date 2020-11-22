 import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import '../../style/Modal.css';


export class ChatInfoModal extends Component {
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
                        소설방 만들기
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-4">
                            <button style={{ width: '200px', height: '200px' }}>작성방 사진</button>
                        </div>
                        <div className="col-6">
                            <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                                작성방 이름
                            </div>
                            <div>
                        <input type="text" style={{ width: '100%', marginBottom: '5px' }} />
                    </div>
                            <div className="row" style={{ marginTop: '10px' }}>
                        작성 작품 장르
                        </div>
                    <div className="row">
                                <input type="radio" value="소설" className="genre"/> 소설    
                                <input type="radio" value="판타지" className="genre" /> 판타지
                                <input type="radio" value="만화" className="genre" /> 만화
                                <input type="radio" value="드라마" className="genre"/> 드라마
                    </div>
                            <div className="row" style={{ marginTop: '10px'}}>
                        모집 인원 수
                    </div>
                            <div className="row">
                                <input type="radio" value="3" className="people-number" /> 3
                                <input type="radio" value="4" className="people-number" /> 4
                                <input type="radio" value="5" className="people-number" /> 5
                                <input type="radio" value="6" className="people-number" /> 6
                                <input type="radio" value="7" className="people-number" /> 7
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn" onClick={this.props.toggle}>작성방 만들기</Button>
                    <Button className="secondary-btn" onClick={this.props.toggle}>닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;

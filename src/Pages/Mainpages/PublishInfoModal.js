import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import '../../style/Modal.css';


export class ChatInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setSignupIsOpen: false
        };
    }

    render() {
        let setSignupClose = () => this.setState({ setSignupIsOpen: false });
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        소설 보기
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-3">
                            <img src="https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg" width= "200" height = "200" />
                        </div>
                        <div className="col-6" style={{ paddingLeft: '40px'}}>
                            <p>루피의 모험</p>
                            <p>#원피스 #루피</p>
                            <p>장르: 모험, 액션</p>
                            <p>평점: 4.89/5점</p>
                            </div>
                    </div>
                    <div className="row" style={{
                        paddingTop: "10px", paddingLeft: '15px'
                    }}>
                        <h6>작가의 말</h6>
                        </div>
                    <div className="row" style={{ marginLeft: '1px' }}>
                        <p>재밋게 읽어 주셧으면 합니다-작가 일동</p><h2/>
                        </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className="secondary-btn">소설 읽기</Button>
                    <Button onClick={this.props.onHide} className="primary-btn">닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;

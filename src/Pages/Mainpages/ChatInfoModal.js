import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import ChatSignupModal from './ChatSignupModal.js';
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
<<<<<<< HEAD
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        One Piece chatroom
=======
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        원피스 소설방
>>>>>>> AAA
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-3">
                            <img src="https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg" width= "200" height = "200" />
                        </div>
                        <div className="col-6" style={{ paddingLeft: '40px'}}>
<<<<<<< HEAD
                            <p>Join in our One Piece Chatroom</p>
                            <p>#One Piece #Luffy all the way</p>
                            <p>Genre: Adventure, Action</p>
                            <p>�����Կ�: 2 / 5 people</p>
=======
                            <p>원피스 소설방에 참가하세요 ㅎㅎ</p>
                            <p>#원피스 #루피짱짱맨</p>
                            <p>장르: 모험, 액션</p>
                            <p>모집인원: 2 / 5 명</p>
>>>>>>> AAA
                            </div>
                    </div>
                    <div className="row" style={{
                        paddingTop: "10px", paddingLeft: '15px'
                    }}>
<<<<<<< HEAD
                        Available Characters
                        </div>
                    <div className="row">
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> Luffy
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> Zoro
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> Usopp
=======
                        가능한 캐릭터
                        </div>
                    <div className="row">
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> 조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝
>>>>>>> AAA
                        </div>

                </Modal.Body>
                <Modal.Footer>
<<<<<<< HEAD
                    <Button onClick={() => this.setState({ setSignupIsOpen: true })} className="primary-btn">Sign up</Button>
                    <ChatSignupModal show={this.state.setSignupIsOpen} onSubmit={setSignupClose} />
                    <Button onClick={this.props.onHide} className="secondary-btn">Close</Button>
=======
                    <Button onClick={() => this.setState({ setSignupIsOpen: true })} className="primary-btn">등록하러가기</Button>
                    <ChatSignupModal show={this.state.setSignupIsOpen} onSubmit={setSignupClose} />
                    <Button onClick={this.props.onHide} className="secondary-btn">닫기</Button>
>>>>>>> AAA
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;

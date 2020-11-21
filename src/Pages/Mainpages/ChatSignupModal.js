import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import SubmissionModal from './SubmissionModal.js';
<<<<<<< HEAD

export class ChatSignupModal extends Component {
=======
import '../../style/Modal.css';

export class ChatSignupModal extends Component {

>>>>>>> AAA
    constructor(props) {
        super(props);
        this.state = {
            setSubmitIsOpen: false
        };
    }

    render() {
        let setSubmitClose = () => this.setState({ setSubmitIsOpen: false });
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
                        Application form for chatroom
=======
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        참가 신청서
>>>>>>> AAA
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
<<<<<<< HEAD
                        Character Option
                    </div>
                    <div className="row">
                        First choice:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> Luffy
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> Zoro
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> Usopp
                        </div>
                    <div className="row">
                        Second choice:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> Luffy
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> Zoro
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> Usopp
                        </div>
                    <div className="row">
                        Third choice:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> Luffy
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> Zoro
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> Usopp
                        </div>
                    <div className="row">
                        Why do you wish to join this chatroom?
=======
                        캐릭터 선택
                    </div>
                    <div className="row">
                        1순위로 하고싶은 캐릭터:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> 조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝
                        </div>
                    <div className="row">
                        2순위로 하고싶은 캐릭터:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> 조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝
                        </div>
                    <div className="row">
                        3순위로 하고싶은 캐릭터:
                        <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" /> 조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝
                        </div>
                    <div className="row">
                        왜 저희 소설방에 참가하고 싶나요?
>>>>>>> AAA
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%'}}/>
                    </div>
                    <div className="row">
<<<<<<< HEAD
                        What kind of story do you want to make with your friends?
=======
                        어떠한 이야기를 친구와 함께 만들어 가고 싶나요?
>>>>>>> AAA
                        </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                    <div className="row">
<<<<<<< HEAD
                        Will you be respectful and helpful in creating story with your peers?
=======
                        친구와 이야기를 만들때 어떠한 태도로 함께 할건가요?
>>>>>>> AAA
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
<<<<<<< HEAD
                    <Button onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">Submit</Button>
                    <SubmissionModal show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">Close</Button>
=======
                    <Button onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">등록</Button>
                    <SubmissionModal show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">취소</Button>
>>>>>>> AAA
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

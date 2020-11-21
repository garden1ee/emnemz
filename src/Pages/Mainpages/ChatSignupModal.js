import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import SubmissionModal from './SubmissionModal.js';
import '../../style/Modal.css';

export class ChatSignupModal extends Component {

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
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        참가 신청서
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
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
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%'}}/>
                    </div>
                    <div className="row">
                        어떠한 이야기를 친구와 함께 만들어 가고 싶나요?
                        </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                    <div className="row">
                        친구와 이야기를 만들때 어떠한 태도로 함께 할건가요?
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">등록</Button>
                    <SubmissionModal show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">취소</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

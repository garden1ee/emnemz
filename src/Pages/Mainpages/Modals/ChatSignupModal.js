import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import SubmissionModal from './SubmissionModal.js';

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
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        소설 참가 신청서
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row" style={{ marginTop: "5px", marginBottom: "15px", marginLeft: "5px"}}>
                        <h5>선택 가능한 캐릭터</h5>
                    </div>
                    <div className="row">
                    <div className="col-4">
                            <div className="row" style={{ marginTop: "10px", marginLeft: "10px" }}>
                        가장 하고 싶은 캐릭터:
                        </div>
                            <div className="row" style={{ marginTop: "25px", marginLeft: "10px" }}>
                        2번 째로 하고 싶은 캐릭터:
                        </div>
                            <div className="row" style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "10px" }}>
                        3번째로 하고싶은 캐릭터:
                        </div>
                    </div>
                    <div className="col-8">
                            <div className="row">
                                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" />조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝        
                        </div>
                        <div className="row">
                                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" />조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝 
                        <img src="https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png" width="50" height="50" className="profile-pic" />선택 없음
                        </div>
                        <div className="row">
                                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F274E2B36579831D510628C" width="50" height="50" className="profile-pic" /> 루피
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c2477.jpg" width="50" height="50" className="profile-pic" />조로
                        <img src="https://appdata.hungryapp.co.kr/images/dbimg/onepeacetc/c1446.jpg" width="50" height="50" className="profile-pic" /> 우솝
                        <img src="https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png" width="50" height="50" className="profile-pic" />선택 없음
                        </div>
                        </div>
                        </div>
                    <div className="row">
                        왜 이 소설에 참가하고 싶은가요?
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%'}}/>
                    </div>
                    <div className="row">
                        친구와 어떠한 소설을 작성해 보고 싶나요?
                        </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                    <div className="row">
                        소설이 완성될 때까지 책임감 있게 참여하실 건가요?
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">등록</Button>
                    <SubmissionModal show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

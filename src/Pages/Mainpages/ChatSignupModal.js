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
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Application form for chatroom
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
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
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%'}}/>
                    </div>
                    <div className="row">
                        What kind of story do you want to make with your friends?
                        </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                    <div className="row">
                        Will you be respectful and helpful in creating story with your peers?
                    </div>
                    <div className="row">
                        <input type="text" style={{ width: '100%' }}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">Submit</Button>
                    <SubmissionModal show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

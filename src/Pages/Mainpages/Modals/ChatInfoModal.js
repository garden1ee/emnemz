 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { auth } from "../../../firebase";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import ChatSignupModal from './ChatSignupModal.js';
import '../../../style/Modal.css';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

export class ChatInfoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }
    render() {
        const { uid, photoURL } = auth.currentUser;
        const check = this.props.characters.find(c => c['user'] === uid);
        let setSignupClose = () => this.setState({ modalOpen: false });
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.info.title}
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-3">
                            <img src={this.props.info.profilePic} width= "200" height = "200" />
                        </div>
                        <div className="col-6" style={{ paddingLeft: '40px'}}>
                            <p>{this.props.info.intro}</p>
                            <p>{this.props.info.hashtag}</p>
                            <p>장르: {this.props.info.genre}</p>
                            <p>모집인원: {this.props.characters.length}</p>
                            </div>
                    </div>
                    <div className="row" style={{
                        paddingTop: "10px", paddingLeft: '15px'
                    }}>
                        선택할 수 있는 캐릭터
                        </div>
                    <div className="row">
                        {this.props.characters.map(c =>
                        <div><img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</div>)}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {check ? <Link to={{
                            pathname : `/writingroom/${this.props.id}`,
                            state : {
                                    info: this.props.info,
                                    characters: this.props.characters
                                    }
                        }}><Button className="primary-btn">작성방 입장</Button></Link> :
                    <Button onClick={() => this.setState({ modalOpen: true })} className="primary-btn">등록하기</Button> }
                    <ChatSignupModal show={this.state.modalOpen} onSubmit={setSignupClose} characters={this.props.characters} uid={uid} roomid={this.props.id}/>
                    <Button onClick={this.props.onHide} className="secondary-btn">닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;

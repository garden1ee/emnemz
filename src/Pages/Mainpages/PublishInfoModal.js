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
                        One Piece chatroom
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-3">
                            <img src="https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg" width= "200" height = "200" />
                        </div>
                        <div className="col-6" style={{ paddingLeft: '40px'}}>
                            <p>Join in our One Piece Chatroom</p>
                            <p>#One Piece #Luffy all the way</p>
                            <p>Genre: Adventure, Action</p>
                            <p>Rating: 4.89</p>
                            </div>
                    </div>
                    <div className="row" style={{
                        paddingTop: "10px", paddingLeft: '15px'
                    }}>
                        <h6>Author's Notes</h6>
                        </div>
                    <div className="row" style={{ marginLeft: '1px' }}>
                        <p>We worked really hard to make this entertaining for you guys, hope you guys enjoy this! - Nami</p>
                        <p>We had so much fun writing this and we hope you would enjoy this as well - Zoro </p>
                        <p>This is my first work on this platform! Enjoy our work! - Luffy </p>
                        </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide} className="secondary-btn">Read this work</Button>
                    <Button onClick={this.props.onHide} className="primary-btn">Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatInfoModal;

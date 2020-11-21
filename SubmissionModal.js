import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import MyPage from './MyPage.js';
import { fontSize } from '@material-ui/system';


export class SubmissionModal extends Component {
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
                        Submission Complete
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You have submitted your request! If your request gets approved by the moderators, it will be displayed at the alarm menu. You can check your status at mypage.
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn"><Link to="/mypage" style={{
                        fontSize: 15, color: 'white'}} > Mypage</Link></Button>
                    <Button onClick={this.props.onComplete} className="secondary-btn">Close</Button>
                </Modal.Footer>
                <Route path="/mypage" component={MyPage} />
            </Modal>
        );
    }
}
export default SubmissionModal;

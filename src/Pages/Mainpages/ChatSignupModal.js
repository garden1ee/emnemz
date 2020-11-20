import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class ChatSignupModal extends Component {
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
                        Modal heading
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This is second modal: room signup modal
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onSubmit}>Submit</Button>
                    <Button onClick={this.props.onSubmit}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

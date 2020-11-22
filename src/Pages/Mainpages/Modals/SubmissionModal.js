import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import MyPage from '../MyPage.js';


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
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        제출 완료
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    제출이 완료되었습니다. 승인 신청을 받으시면 알람에 표시됩니다. 소설 작성방은 마이페이지에 [신청중인 방]에서 확인 가능합니다
                </Modal.Body>
                <Modal.Footer>
                    <Button className="primary-btn"><Link to="/mypage" style={{
                        fontSize: 15, color: 'white'}} > 마이페이지</Link></Button>
                </Modal.Footer>
                <Route path="/mypage" component={MyPage} />
            </Modal>
        );
    }
}
export default SubmissionModal;

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
              <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                      등록 완료
      </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  등록이 완료 되었습니다. 승인 요청이 완료된다면 알람메뉴에서 확인할 수 있습니다. 마이페이지 [신청중인 방]에서 확인 하실 수 있습니다.
              </Modal.Body>
              <Modal.Footer>
                  <Button className="primary-btn"><Link to="/mypage" style={{
                      fontSize: 15, color: 'white'}} > 마이페이지</Link></Button>
                  <Button onClick={this.props.onComplete} className="secondary-btn">닫기</Button>
              </Modal.Footer>
              <Route path="/mypage" component={MyPage} />
          </Modal>
      );
  }
}
export default SubmissionModal;

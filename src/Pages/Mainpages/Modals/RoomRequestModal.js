import React, { Component, useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

function RoomRequestModal({ c }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={c.number}>
            <div className="row">
                {c.id}
            </div>
            <div className="row">
                <button onClick={() => { setShowModal(true); }}> {c.image}</button>
                <Modal on Hide={() => setShowModal(false)} show={showModal}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter"> 신청 상태
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>  신청하신 "{c.name}" 방은 신청 수락이 아직 안 된 상태입니다</Modal.Body>
                    <Modal.Footer>
                        <Button className="secondary-btn" onClick={() => { setShowModal(false) }}>닫기</Button>
                    </Modal.Footer>
                    </Modal>
            </div>
            <div className="row">
                {c.name}
            </div>
            <div className="row">
                {c.birthday}
            </div>
            <div className="row">
                {c.score}
            </div>
        </div>


        )
}
export default RoomRequestModal;

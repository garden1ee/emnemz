import React, {useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

function InsertImg({ c }) {
    if (c.number == "1") {
        return (<img src={"https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg"} style={{
            width: '260px', textAlign: 'center', height: '250px'
        }} />)
    }
    else if (c.number == "2") {
        return (<img src={'https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp'} style={{
            width: '260px', textAlign: 'center', height: '250px'
        }} />)
    }
    else if (c.number == "3") {
        return (<img src={'https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'} style={{
            width: '260px', textAlign: 'center', height: '250px'
        }} />)
    }
}

function InsertImg2({ c }) {
    if (c.number == "1") {
        return (<img src={"https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg"} style={{
            width: '200px', height: '200px'
        }} />)
    }
    else if (c.number == "2") {
        return (<img src={'https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp'} style={{
            width: '200px', height: '200px'
        }} />)
    }
    else if (c.number == "3") {
        return (<img src={'https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'} style={{
            width: '200px', height: '200px'
        }} />)
    }
}

function RoomCompleteModal({ c }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div key={c.number}>
            <div className="row">
                <button onClick={() => { setShowModal(true); }}> {InsertImg({ c })}</button>
                <Modal on Hide={() => setShowModal(false)} show={showModal}>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter"> 소설 보기
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-3">
                                {InsertImg2({ c })}
                            </div>
                            <div className="col-6" style={{ marginLeft: '100px' }}>
                                <p>{c.name}</p>
                                <p>{c.birthday}</p>
                                <p>{c.genre}</p>
                                <p>{c.score}</p>
                            </div>
                        </div>
                        <div className="row" style={{
                            paddingTop: "10px", paddingLeft: '15px'
                        }}>
                            <h6>작가의 말</h6>
                        </div>
                        <div className="row" style={{ marginLeft: '1px' }}>
                            <p>재밋게 읽어 주셧으면 합니다-작가 일동</p><h2 />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="secondary-btn" onClick={() => { setShowModal(false) }}>닫기</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className="row" style={{ marginTop: "5px", marginBottom: "5px" }}>
                {c.name}
            </div>
            <div className="row " style={{ marginTop: "5px", marginBottom: "5px" }}>
                {c.birthday}
            </div>
            <div className="row" style={{ marginTop: "5px", marginBottom: "15px" }}>
                {c.score}
            </div>
            <div className="row" style={{ marginTop: "5px", marginBottom: "15px" }} >
                <button onClick={() => { setShowModal(true); }}> {c.id}</button>
            </div>
        </div>


    )
}


export default RoomCompleteModal;

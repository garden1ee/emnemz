import React, { Component } from 'react';
import { firestore } from "../../../firebase";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import SubmissionModal from './SubmissionModal.js';

export class ChatSignupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setSubmitIsOpen: false,
            FstPf: '',
            SndPf: '',
            TrdPf: '',
            reason: '',
            goal:'',
            responsible:''
        };
    }
    handleChange(event) {
        if (event.target.name=="FstPf") this.setState({FstPf: event.target.value});
        else if (event.target.name=="SndPf") this.setState({SndPf: event.target.value});
        else if (event.target.name=="TrdPf") this.setState({TrdPf: event.target.value});
        else if (event.target.name=="reason") this.setState({reason: event.target.value});
        else if (event.target.name=="goal") this.setState({goal: event.target.value});
        else if (event.target.name=="responsible") this.setState({responsible: event.target.value});
    }
    async handleSubmit() {
        const roomRef = firestore.doc(`rooms/${this.props.roomid}`);
        await roomRef.set({
            applyform : {
                FstPf: this.state.FstPf,
                SndPf: this.state.SndPf,
                TrdPf: this.state.TrdPf,
                reason: this.state.reason,
                goal: this.state.goal,
                responsible: this.state.responsible,
                uid: this.props.uid
            }
        }, {merge: true});
    }
    render() {
        let roomid = this.props.roomid;
        let uid = this.props.uid;
        let addUser = async function () {
            const roomRef = firestore.doc(`rooms/${roomid}`);
            await roomRef.set({
                applicants: [uid]
            }, {merge: true});
        }
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
                    <form onSubmit={this.handleSubmit}>
                    <div className="row" style={{ marginTop: "5px", marginBottom: "15px", marginLeft: "5px"}}>
                        <h5>선택 가능한 캐릭터</h5>
                    </div>
                    <div className="row">
                    <div className="col-2">
                            <div className="row" style={{ marginTop: "10px", marginLeft: "10px" }}>
                        1지망 캐릭터:
                        </div>
                            <div className="row" style={{ marginTop: "25px", marginLeft: "10px" }}>
                        2지망 캐릭터:
                        </div>
                            <div className="row" style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "10px" }}>
                        3지망 캐릭터:
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {this.props.characters.map(c =>
                            <label><input type="radio" name="FstPf" value={c.name} checked={this.state.FstPf[c.name]} onChange={this.handleChange.bind(this)}/>
                                <img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</label>)}       
                        </div>
                        <div className="row">
                            {this.props.characters.map(c =>
                            <label><input type="radio" name="SndPf" value={c.name} checked={this.state.SndPf[c.name]} onChange={this.handleChange.bind(this)}/>
                            <img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</label>)}
                            <label><input type="radio" name="SndPf" value="none" checked={this.state.SndPf['none']} onChange={this.handleChange.bind(this)}/>
                            <img src="https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png" width="50" height="50" className="profile-pic" />선택 없음</label>
                        </div>
                        <div className="row">
                        {this.props.characters.map(c =>
                            <label><input type="radio" name="TrdPf" value={c.name} checked={this.state.TrdPf[c.name]} onChange={this.handleChange.bind(this)}/>
                            <img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</label>)}
                            <label><input type="radio" name="TrdPf" value="none" checked={this.state.TrdPf['none']} onChange={this.handleChange.bind(this)}/>
                            <img src="https://icons-for-free.com/iconfiles/png/512/x-1321215629555778185.png" width="50" height="50" className="profile-pic" />선택 없음</label>
                        </div>
                        </div>
                        </div>
                    <div className="row" style={{marginLeft: '30px', marginRight: '30px'}}>
                        왜 이 소설에 참가하고 싶은가요?
                    </div>
                    <div className="row">
                        <input type="text" name="reason" onChange={this.handleChange.bind(this)} style={{ width: '80%'}}/>
                    </div>
                    <div className="row">
                        친구와 어떠한 소설을 작성해 보고 싶나요?
                        </div>
                    <div className="row">
                        <input type="text" name="goal" onChange={this.handleChange.bind(this)} style={{ width: '80%' }}/>
                    </div>
                    <div className="row">
                        소설이 완성될 때까지 책임감 있게 참여하실 건가요?
                    </div>
                    <div className="row">
                        <input type="text" name="responsible" onChange={this.handleChange.bind(this)} style={{ width: '80%' }}/>
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={() => this.setState({ setSubmitIsOpen: true })} className="primary-btn">등록</Button>
                    <SubmissionModal submit={addUser} show={this.state.setSubmitIsOpen} onComplete={setSubmitClose} />
                    <Button onClick={this.props.onSubmit} className="secondary-btn">닫기</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default ChatSignupModal;

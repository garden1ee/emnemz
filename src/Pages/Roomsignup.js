import React, {useState} from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { firestore, auth } from "../firebase";

const Roomsignup = (props) => {
    const [isOpen, setOpen] = useState(false);
    const Open = () => {
        setOpen(true);
      }
    const Close = () => {
        setOpen(false);
      }

    const [ chara, setChara ] = useState("");
    const [ reason, setReason ] = useState("");
    const [ determ, setDeterm ] = useState("");
    const [ words, setWords ] = useState("");
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if (name === "chara") {
            setChara(value);
        }
        else if (name === "reason") {
            setReason(value);
        }
        else if (name === "determ") {
            setDeterm(value);
        }
        else if (name === "words") {
            setWords(value);
        }
    }
    const { uid, photoURL } = auth.currentUser;
    let addUser = async function () {
        const roomRef = firestore.doc(`rooms/${props.roomid}`);
        await roomRef.set({
            applicants: [uid]
        }, {merge: true});
        const appRef = firestore.collection(`rooms/${props.roomid}/applyforms`);
        await appRef.doc(uid).set(
            {
                chara,
                reason,
                determ,
                words,
                uid
        })
    }
    const [smOpen, setSmO ] = useState(false);
    const Oopen = () => {
        setSmO(true);
    }
    const Cclose = () => {
        setSmO(false);
    }
    return (
    <div>
        <Button variant="outlined" color="primary" onClick={Open}>
            등록하기
        </Button>
        <Dialog open={isOpen} onClose={Close} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>
            <DialogTitle><span style={{fontWeight: '700', textAlign: 'center'}}>소설방 신청</span></DialogTitle>
            <DialogContent dividers>
                    캐릭터 목록 :
            {props.characters.map(c =>

                            <span><img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</span>)}
                    <br/>
                <TextField autoFocus margin="dense" name="chara" value={chara} label="하고 싶은 캐릭터" fullWidth onChange={(e)=>handleChange(e)}/>
                <TextField margin="dense" name="reason" value={reason} label="참여하고 싶은 이유" fullWidth onChange={(e)=>handleChange(e)}/>
                <TextField margin="dense" name="determ" value={determ} label="앞으로의 각오" fullWidth onChange={(e)=>handleChange(e)}/>
                <TextField margin="dense" name="words" value={words} label="하고 싶은 말" fullWidth onChange={(e)=>handleChange(e)}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{addUser();Oopen();}} variant="outlined" color="primary">
                    제출하기
                </Button>
                <Dialog open={smOpen} onClose={Cclose} fullWidth='true' style={{padding: '30px'}}>
                    <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>제출 완료</span></DialogTitle>
                    <DialogContent>
                    신청이 완료되었습니다. 신청 내역은 마이페이지에 [신청중인 방]에서 확인 가능합니다.
                    </DialogContent>
                    <DialogActions style={{padding: '20px'}}>
                        <Button variant="outlined" color="primary" onClick={Cclose}>
                            <Link to="/mypage" style={{textDecoreation: 'none'}} >마이페이지로</Link>
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button onClick={Cclose} variant="outlined">
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default Roomsignup;



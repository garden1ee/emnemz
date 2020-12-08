import TableRow from '@material-ui/core/TableRow';
import {useRef, useState} from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import {firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import NovelRoomInfo from './NovelRoomInfo';
import { Link, useLocation} from 'react-router-dom';
import React, {useContext} from 'react';
import { UserContext } from "../Components/UserProvider";
import ReadNovel from './ReadNovel';

const Publish = (props) => {
    const roomsRef = firestore.collection('rooms');
    const user = useContext(UserContext);
    const { photoURL, displayName, email, uid } = user;
    const query = roomsRef.where("users","array-contains", uid );
    const [rooms] = useCollectionData(query, { idField: 'id' });
   //find(r => r['id'] === props.id));
    
    const [participant_num, setParticipantNum] = useState(props.participant_num);
    const [notice, setNotice] = useState(false);
    const dummy = useRef();
    const messagesRef = firestore.collection(`scripts_${props.id}`);
    const Messagequery = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(Messagequery, { idField: 'id' });
    const location = props.location;
    const [info, setInfo] = useState(location.state.info);
    var value = "";
    var [contents, setContents] = useState(value);
    
    let updateCompleted = async function(){
        const roomRef = firestore.doc(`rooms/${props.id}`);
        await roomRef.set({
            completed: true
        },{merge: true});
    }

    const openConfirm = () => {
        setNotice(true);

      
         updateCompleted();
        
    }
    const closeConfirm = () => {
        setNotice(false);
    }
    return (

        <div>
         
          <TableRow>
            <p style={{position: "relative", left: "50%", top: "50%"}}>
                현재까지 동의한 인원: {props.agree_num} / {props.participant_num}
            </p>
          </TableRow>
          <Dialog open={props.isCompleted} fullWidth='true' maxWidth="sm">
          <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>소설방 정보</span></DialogTitle>
            <DialogContent style={{padding: '30px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={5} style={{textAlign: 'center'}}>
                        <img src={info.profilePic} width= "200" height = "200" alt="profile"/>
                    </Grid>
                    <Grid item xs={7}>
                        <p style={{fontWeight: '700'}}>작품명:  {info.title}</p>
                        <p>장르:  {info.genre}</p>
                        <p>해시태그:  {info.hashtag}</p>
                        <p>작품 소개: {info.intro}</p>
                        <p>작가의 말:  {info.authorwords}</p>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions style={{padding: '30px'}}>
                <Button variant="outlined" color="primary" onClick={()=>openConfirm()}> 확인 </Button>
            </DialogActions>
         
            <Dialog open={notice}>
                <DialogContent style={{padding: '30px'}}>
                    <p>소설방 전원이 동의하여 작품이 완결되었습니다. </p>
                    <p>완결 작품은 "완결 작품들" 탭과 마이페이지에서 확인하실 수 있습니다. </p>
                </DialogContent>
                <DialogActions>
                <ReadNovel id={props.id} title={info.title}/>
                <Button variant="outlined"><Link to="/" style={{textDecoration:'none'}}> 메인 페이지로 돌아가기 </Link></Button>
                </DialogActions>
            </Dialog>
        </Dialog>  
      
        </div>

    );
}

export default Publish;

/*   {messages && messages.map((message) =>
             <div>{message.character + ":" + " " + message.text + " "}
              <br></br>
               </div>
              
               )
               }
*/
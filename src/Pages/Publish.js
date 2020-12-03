import TableRow from '@material-ui/core/TableRow';
import {useRef, useState} from 'react';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import {firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { DialogContent } from '@material-ui/core';
import NovelRoomInfo from './NovelRoomInfo';
import { Link, useLocation} from 'react-router-dom';
import React, {useContext} from 'react';
import { UserContext } from "../Components/UserProvider";

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
            completed: true,
            messages: messages
        },{merge: true});
    }

    const openConfirm = () => {
        setNotice(true);

      
         updateCompleted();
        
    }
    return (

        <div>
         
          <TableRow>
            <p style={{position: "relative", left: "50%", top: "50%"}}>
                현재까지 동의한 인원: {props.agree_num} / {props.participant_num}
            </p>
          </TableRow>
          <Dialog open={props.isCompleted} >
          <DialogContent style={{width: 1000, height: 700}}>

           

     
           
                    <TableRow>
                        <img src= {info.profilePic} width="200" height="200" alt="profile"/>
                
                        <br></br>
                        <p className="NV-li">
                            <TableRow> 작품명:   {info.title}  </TableRow>
                            
                            <TableRow>장르:  {info.genre}</TableRow>
                            <br></br>
                            <TableRow> 해시 태그:  {info.hashtag}</TableRow>
                            <br></br>
                            <TableRow> 작품 소개: {info.intro}</TableRow>
                        </p>

                    </TableRow>
                    <TableRow>
                        <TableCell style={{width:500}}> 작가의 말: {info.authorwords}</TableCell>

                    </TableRow>
          
                <DialogContent>

                <button onClick={() => openConfirm()} class="btn btn-primary">
                    확인
                </button>
                </DialogContent>


          </DialogContent>
         
            <Dialog open={notice}>
                <DialogContent>
                    <TableRow>
                    소설방 전원이 동의하여 작품이 완결되었습니다. 
                    </TableRow>
                    <TableRow>
                    완결 작품은 "완결 작품들" 탭과 마이페이지에서 확인하실수 있습니다. 
                    </TableRow>
                    <TableRow>
                    <button type="button" className="btn btn-primary"
                                 style={{margin: 50}}>
                       
                         작품 보러가기 
                    </button>
                
                    <button type="button" className="btn btn-primary">
                      <Link to="/" style={{fontsize: "1em"}}>
                    메인 페이지로 돌아가기
                      </Link>
                    </button>
                    </TableRow>
                </DialogContent>
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
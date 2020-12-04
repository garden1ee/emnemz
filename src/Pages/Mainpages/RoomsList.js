
import React, { useState } from 'react';
import { firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Grid, Paper } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import { auth } from "../../firebase";
import ChatSignupModal from './Modals/ChatSignupModal.js';

const Roomslist = () => {
    const roomsRef = firestore.collection('rooms');
    const query = roomsRef.where("completed","==",false);
    //.where("hashtag","array-contains", "#바보" );
    const [rooms] = useCollectionData(query, { idField: 'id' });
    const searchbarstyle={
        color: "black",
        background: "#C4C4C4",
        fontSize: 17,
        marginLeft:0,
        height: 29,
        width: "auto",
        marginRight: 10,
    }
    return (
        <Grid container spacing={4} style={{ width: '100%', fontSize: '20px', margin: '20px'}}>
        <Grid item xs={6}>
          <input style={searchbarstyle}/>
          <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
        </Grid>
        <Grid item xs={6}>
          <ui class="searchbar_char">
            <text style={{textAlign: 'center'}}>해시태그:</text>
            <select name="job">
              <option value="">소설</option>
              <option value="fantagy">판타지</option>
              <option value="cartoon" selected="selected">만화</option>
              <option value="drama">드라마</option>
            </select>&nbsp;&nbsp;&nbsp;
              <text style={{textAlign: 'center'}}>정렬:&nbsp;&nbsp;&nbsp;</text>
            <select name="job">
              <option value="most">최신순</option>
              <option value="popular">인기순</option>
              <option value="" selected="selected">평점순</option>
              <option value="">검색순</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ui>
        </Grid>
            { rooms && rooms.map(r=><RoomObj key={r.id} id={r.id} info={r.info} characters={r.characters}/>) }
            { (rooms===undefined || rooms.length==0) && <text>해당하는 방이 없습니다.</text> }
        </Grid>
    )
}
export default Roomslist;

function RoomObj(props) {
    const [modalOpen,setModalOpen] = useState(false);

    const [isRegister, setRegister] = useState(false);
    const { uid, photoURL } = auth.currentUser;
    const [submitted, setSubmitted] = useState(false);

    const onRegister =  () => {
      setRegister(true);
    }

    const setModalClose = () =>{
      setRegister(false);
    }

    const setSubmit = () => {
      setSubmitted(true);
    }

  return (
    <Grid item xs={3}>
        <Paper fontSize={"13px"} style={{textAlign: "center", marginBottom: "10px", paddingBottom:"10px"}}
                onClick={() => setModalOpen(true)}>
            <img src={props.info.profilePic} style={{width:200, height:200}}/>
            <br />
            {props.info.title}
            <br />
            {props.info.hashtag}
            <br />
        </Paper>
        <Dialog open={modalOpen} onClose={setModalClose} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>
            <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>{props.info.title}</span></DialogTitle>
            <DialogContent dividers style={{padding: '30px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        <img src={props.info.profilePic} width= "200" height = "200" />
                    </Grid>
                    <Grid item xs={8}>
                        <p>{props.info.intro}</p>
                        <p>{props.info.hashtag}</p>
                        <p>장르: {props.info.genre}</p>
                        <p>모집인원: {props.characters.length}</p>
                    </Grid>
                    <Grid item xs={12} style={{
                        paddingTop: "10px", paddingLeft: '15px'}}>
                    등장 캐릭터
                    </Grid>
                    <Grid item xs={12}>
                        {props.characters.map(c =>
                            <span><img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</span>)}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions style={{padding: '20px'}}>
                <button onClick={setSubmit}>등록하기</button>
                <Dialog open={isRegister}>
               
                  <DialogContent>
                  <div className="row">
                        <div className="col-3">
                            <img src={props.info.profilePic} width= "200" height = "200" />
                        </div>
                        <div className="col-6" style={{ paddingLeft: '40px'}}>
                            <p>{props.info.intro}</p>
                            <p>{props.info.hashtag}</p>
                            <p>장르: {props.info.genre}</p>
                            <p>모집인원: {props.characters.length}</p>
                            </div>
                    </div>
                    <div className="row" style={{
                        paddingTop: "10px", paddingLeft: '15px'
                    }}>
                        선택할 수 있는 캐릭터
                        </div>
                    <div className="row">
                        {props.characters.map(c =>
                        <div><img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</div>)}
                    </div>
                    <button onClick={setModalClose} className="btn btn-primary">
                    닫기
                </button>
                  </DialogContent>
                </Dialog>
                <Dialog open={submitted}>
                  <DialogContent>
                       제출되었습니다.
                  </DialogContent>
                </Dialog>
               
            </DialogActions>
        </Dialog>
    </Grid>
  )  
}

/*
 <ChatSignupModal show={isRegister}
                onSubmit={setRegister(false)} characters={props.characters} uid={uid} roomid={props.id}/>
*/
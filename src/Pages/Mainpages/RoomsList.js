
import React, { useState } from 'react';
import { firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Grid, Paper } from "@material-ui/core";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import Roomsignup from '../Roomsignup';

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
    async function addroom() {
      const info = {title: "슬기로운 의사생활",
    profilePic: "http://img.newspim.com/news/2020/02/19/2002191027165970.jpg", 
    intro:"좌충우돌 의사들의 판타지", hashtag:["#개그","#드라마"],genre:"드라마, 의학, 로맨스",
authorwords:"소소하지만 특별한 의사들의 이야기 "};
    const characters = [{name:"김준완",pic:"https://ww.namu.la/s/748d0d5da5c0daa06cc3ea5c48323fbe64e25c8810876968e4eb3f17bd6ca723366d29d73d81da1f65bc262f9743a0ec7f9855cb02cf8860fc184df441389b4f91c48003f77f578b9508a9640feca643b6f28759ed61e30b7406e4e37ce46d0a",
user:""},
    {name:"안정원",pic:"https://w.namu.la/s/0afbce42b632f22f922ece5a6d1ea59fa513b22eade5573f5b1cc73348bde754c137809d1bbc527d809fac0833b4c6aee3610cf5e16d7f382de3fef8ceb97831922af8a57967965527ec0a02ee98fda8c7e4cf771de8651b07d7103695871cf3",
user:""}];

    const poketmon_info =  {title: "포켓몬스터",
    profilePic: "https://w.namu.la/s/95ddfb0274e72b5b412892127d60e8c3827cb30da4c6afa74b2a110414d9a445335934e7d71936778d5e417b4ea55d47ffdd2ab4afe1ac5aac6b7319e666fefcf4f0adc18d201c1a1720ebafdc18f21047cde583a388420289803f96d261ee6d",
    intro:"포켓몬들을 구하는 모험", hashtag:["#모험","#피카츄"],genre:"애니메이션, 액션, 판타지",
authorwords:"피카츄 파이리 꼬부기 이야기 "};

    const poketmon_characters = [{name:"피카츄",pic:"https://w.namu.la/s/51f656cb58ffc529724fc1f62dc055430f035f937344cda61f6abcfa0e5001e2bc0cd13ae4a192b30962943a5526da6554ae6445388ced9d468e24369ed4b1f7afa84b060f048f8dec8b7d2967a0b280835f589cfaf5f81bf5679a19944fec600bbe8691592be51d35cd59640a120319",
user:"lynn312"},
    {name:"꼬북이",pic:"https://ww.namu.la/s/b2dc5e311ec289962916adfcc72479367bfc2764f1f262769468d74441c22c573fcb68dc7c4bd2befb04ad64d388478fd1a985cea20aceeb0db3a5998bf5a37850ec3d99b9c075dae8378167b5604f3c650881eaaf9a31931d75b2754cc1c8a30f01a944d30b8b4e5aab7cea44767825",
user:""}];


      await firestore.doc('rooms/5').set({
        info,
        characters,
        completed: false,
        users: [],
        agree_num: 0
      })


    }
  
    return (
        <Grid container spacing={4} style={{ width: '100%', fontSize: '20px', margin: '20px'}}>
        <Grid item xs={6}>
          <input style={searchbarstyle}/>
          <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다");addroom();}}> 검색</button>
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

export function RoomObj(props) {
    const [modalOpen,setModalOpen] = useState(false);
    let setModalClose = () => setModalOpen(false);
  return (
    <Grid item xs={3}>
        <Paper style={{textAlign: "center", marginBottom: "10px", paddingBottom:"10px"}}
                onClick={() => setModalOpen(true)}>
            <img src={props.info.profilePic} style={{width:200, height:200}}/>
            <br />
            {props.info.title}
            <br />
            {props.info.hashtag}
            <br />
        </Paper>
        <Dialog open={modalOpen} onClose={setModalClose} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>
            <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>소설방 정보</span></DialogTitle>
            <DialogContent dividers style={{padding: '30px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        <img src={props.info.profilePic} width= "200" height = "200" />
                    </Grid>
                    <Grid item xs={8}>
                        <p style={{fontWeight: '700'}}>{props.info.title}</p>
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
                {props.applied? <Button variant="outlined" color="primary" disabled>신청 중</Button>
                : <Roomsignup roomid={props.id} characters={props.characters}/>}
                <Button variant="outlined" onClick={setModalClose}>
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    </Grid>
  )  
}
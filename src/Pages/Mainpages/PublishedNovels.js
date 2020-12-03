
import React, { useState } from 'react';
import { firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Grid, Paper } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import ReadNovel from '../ReadNovel';

const PublishedNovels = () => {
    const roomsRef = firestore.collection('rooms');
    const query = roomsRef.where("completed","==",true);
    //.where("hashtag","array-contains", "#바보" );
    const [rooms] = useCollectionData(query);
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
        <Grid container spacing={3} style={{ width: '100%', fontSize: '20px', margin: '0px'}}>
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
export default PublishedNovels;

function RoomObj(props) {
    const [modalOpen,setModalOpen] = useState(false);
    let setModalClose = () => setModalOpen(false);
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
        <Dialog open={modalOpen} onClose={setModalClose}>
        <DialogTitle>{props.info.title}</DialogTitle>
        <DialogContent>
            <div className="row">
                <div className="col-4">
                    <img src={props.info.profilePic} width= "200" height = "200" />
                </div>
                <div className="col-8">
                    <p>{props.info.intro}</p>
                    <p>{props.info.hashtag}</p>
                    <p>장르: {props.info.genre}</p>
                    <p>작가의 말: {props.info.authorwords}</p>
                </div>
            </div>
            <div className="row" style={{
                    paddingTop: "10px", paddingLeft: '15px'}}>
                등장 캐릭터
            </div>
            <div className="row">
                {props.characters.map(c =>
                    <div><img src={c.pic} width="50" height="50" className="profile-pic" /> {c.name}</div>)}
            </div>
        </DialogContent>
        <DialogActions>
        <ReadNovel id={props.id} />
            <button onClick={setModalClose} className="btn btn-primary">
                닫기
            </button>
        </DialogActions>
    </Dialog>
    </Grid>

    
  )  
}
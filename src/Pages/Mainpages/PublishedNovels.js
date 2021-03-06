
import React, { useState } from 'react';
import { firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Grid, Paper } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from "@material-ui/core";
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
            { rooms && rooms.map(r=><NovelObj key={r.id} id={r.id} info={r.info} characters={r.characters}/>) }
            { (rooms===undefined || rooms.length==0) && <text>해당하는 방이 없습니다.</text> }
        </Grid>
    )
}
export default PublishedNovels;

export function NovelObj(props) {
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
            <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>작품 정보</span></DialogTitle>
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
                        <p>작가의 말: {props.info.authorwords}</p>
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
            <ReadNovel id={props.id} title={props.info.title}/>
                <Button variant="outlined" onClick={setModalClose}>
                    닫기
                </Button>
            </DialogActions>
        </Dialog>
    </Grid>

    
  )  
}
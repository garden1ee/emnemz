import React, { useState } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import EditProfileModal from './Modals/EditProfileModal.js';
import EnterRoomModal from './Modals/EnterRoomModal.js';

const useStyles = makeStyles((theme)=>({
  grid:{
    width:'100%',
    fontSize:'20px',
    margin:'0px',
  },
  paper: {
    padding: theme.spacing(2),
    color: "black",
    background: "#c4c4c4",
  },
  paper1: {
    padding: theme.spacing(2),
    color: "black",
    background: "#c7c7c7",
    border:0,
  },

}));

const back={
  color: "black",
  fontSize: 18,
}
const back1={
  color: "black",
  fontSize: 36,
}

const MyPage = () => {
    const [modalprofile, setModalprofile] = useState(false);
    const [modalroom, setModalroom] = useState(false);

    const toggleprofile = () => setModalprofile(!modalprofile);
    const toggleroom = () => setModalroom(!modalroom);

    const classes=useStyles();
    return(
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={2}>
            <Grid item xs={10}>
              <h2/>
              <Paper className={classes.paper} textSize={"15px"}>
                        <img src={'https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp'} style={{
                            width: '150px', height: '150px', marginLeft: "5px"
                        }} alt={"profile"}/>
              <h2/>
                        <button style={{ marginLeft: "10px" }}>사진 변경하기</button>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid item xs={4}>
              <h2/>
              <Paper className={classes.paper1} textSize={"15px"}>
              <text>이름:xx나루토xzz</text>
              <h2/>
              <text>관심분야:#모험#액션#만화</text>
              <h2/>
              <text>방 개설 횟수:0</text>
              <h2/>
              <text>방 참여 횟수:0</text>
              <h2/>
              <text>완결 편수:0</text>
              <h2/>
              <h2/>
                        <button style={{ marginLeft: "100px" }} onClick={toggleprofile}>프로필 수정하기<EditProfileModal show={modalprofile} toggleprofile={toggleprofile}/></button>
              <h2/>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <text style={back}>신청중인 방</text>
            <h2/>
            <Paper className={classes.paper} textSize={"15px"}>
                    <img src={'https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp'} style={{
                        width:'330px', textAlign:'center', height:'250px'
                    }} alt={"profile"}/>
            <h2/>
            <Grid xs={12}>
            <text>나루토 성장시키기 방입니다
            <h2/>#나루토멋져#사스케좋아<h2/>	모집입원: 1/5명
            </text>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <text style={back}>참가하는 방</text>
            <h2/>
            <Paper className={classes.paper} textSize={"15px"}>
                    <button onClick={toggleroom}><img src={'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg'} style={{
                        width: '330px', textAlign: 'center', height: '250px'
                    }} alt={"profile"} /><EnterRoomModal show={modalroom} toggleroom={toggleroom}/></button>
            <h2/>
            <Grid xs={12}>
            <text>	원피스 웹소설 드가자
            <h2/>	#원피스 짱짱맨 #루피사기<h2/>	모집입원: 2/5명
            </text>
            </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
          <text style={back}>대기중인 방</text>
          <h2/>
            <Paper className={classes.paper} textSize={"15px"}>
                    <img src={"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"} style={{
                        width: '330px', textAlign: 'center', height: '250px'
                    }} alt={"profile"}/>
            <h2/>
            <Grid xs={12}>
            <text>	이태원 클라쓰 관련 소설 쓰실분?
            <h2/>	#클라스가다르지 #배우팬오세요<h2/>	모집인원 2/7명
            </text>
            </Grid>
            </Paper>
          </Grid>
        </Grid>
    );
};

export default MyPage;

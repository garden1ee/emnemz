import React, { useState,useContext } from "react";
import { UserContext } from "../Components/UserProvider";
import {auth} from "../firebase";
import {makeStyles} from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import EditProfileModal from '../Pages/Mainpages/Modals/EditProfileModal.js';
import EnterRoomModal from '../Pages/Mainpages/Modals/EnterRoomModal.js';

const useStyles = makeStyles((theme)=>({
  grid:{
    width:'100%',
    fontSize:'20px',
    margin:'0px',
  },
  paper: {
    padding: theme.spacing(2),
    color: "black",
    background: "white",
  },
  paper1: {
    padding: theme.spacing(2),
    color: "black",
    background: "white",
    border:0,
  },

}));
const back={
  color: "black",
  fontSize: 18,
}
const ProfilePage = () => {
  const classes=useStyles();
  const authed = auth.currentUser;
  console.log(authed+'curuser');
  const [modalprofile, setModalprofile] = useState(false);
  const [modalroom, setModalroom] = useState(false);
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  const toggleprofile = () => setModalprofile(!modalprofile);
  const toggleroom = () => setModalroom(!modalroom);
  console.log(user);
  return (
    <div>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={3}>
          <h2>Welcome!</h2>
          <div
            style={{
              background: `url(${photoURL || 'https://i.ibb.co/gFDFRHf/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px"
            }}
          ></div>
          <div>
          <h2><text marginLeft={30}/></h2>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid item xs={8}>
            <h2/>
            <Paper className={classes.paper1} textSize={"15px"}>
            <text>이름:{displayName}</text>
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
                      <button onClick={toggleprofile}>프로필 수정하기<EditProfileModal show={modalprofile} toggleprofile={toggleprofile}/></button>
            <h2/>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <text style={back}>신청중인 방</text>
          <h2/>
          <Paper className={classes.paper} textSize={"15px"}>
                  <img src={'https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp'} style={{
                      width:'260px', textAlign:'center', height:'250px'
                  }} alt={"profile"}/>
          <h2/>
          <Grid xs={12}>
          <text>나루토 성장시키기 방입니다
          <h2/>#나루토멋져#사스케좋아<h2/>	모집입원: 1/5명
          </text>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <text style={back}>참가하는 방</text>
          <h2/>
          <Paper className={classes.paper} textSize={"15px"}>
                  <button onClick={toggleroom}><img src={'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg'} style={{
                      width: '260px', textAlign: 'center', height: '250px'
                  }} alt={"profile"} /><EnterRoomModal show={modalroom} toggleroom={toggleroom}/></button>
          <h2/>
          <Grid xs={12}>
          <text>	원피스 웹소설 드가자
          <h2/>	#원피스 짱짱맨 #루피사기<h2/>	모집입원: 2/5명
          </text>
          </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <text style={back}>대기중인 방</text>
        <h2/>
          <Paper className={classes.paper} textSize={"15px"}>
                  <img src={"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"} style={{
                      width: '260px', textAlign: 'center', height: '250px'
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
    </div>
  )
};
export default ProfilePage;

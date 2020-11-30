import React, { useState,useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../Components/UserProvider";
import { auth, firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {makeStyles} from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import EditProfileModal from '../Pages/Mainpages/Modals/EditProfileModal.js';
import EnterRoomModal from '../Pages/Mainpages/Modals/EnterRoomModal.js';
import TableRow from '@material-ui/core/TableRow'
import RoomRequestModal from './Mainpages/Modals/RoomRequestModal.js';
import RoomCompleteModal from './Mainpages/Modals/RoomCompleteModal.js';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        fontSize: '20px',
        margin: '0px',
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
        border: 0,
    },

}));
const back = {
    color: "black",
    fontSize: 18,
}
const stly = {
    textAlign: 'center',
}

const ProfilePage = () => {
    const classes = useStyles();
    const authed = auth.currentUser;
    console.log(authed + 'curuser');
    const [modalprofile, setModalprofile] = useState(false);
    const [modalroom, setModalroom] = useState(false);
    const user = useContext(UserContext);
    const { photoURL, displayName, email, uid } = user;

    const toggleprofile = () => setModalprofile(!modalprofile);
    const toggleroom = () => setModalroom(!modalroom);
 
    const roomsRef = firestore.collection('rooms');
    const query = roomsRef.where("users","array-contains", uid );
  
    const [rooms] = useCollectionData(query, { idField: 'id' });

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
                        <h2><text marginLeft={30} /></h2>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <h2 />
                    <Paper className={classes.paper1} textSize={"15px"}>
                        <text>이름:{displayName}</text>
                        <h2 />
                        <text>관심분야:#모험#만화#웹툰</text>
                        <h2 />
                        <text>방 개설 횟수:0</text>
                        <h2 />
                        <text>방 참여 횟수:0</text>
                        <h2 />
                        <text>완결 편수:0</text>
                        <h2 />
                        <h2 />
                        <button onClick={toggleprofile}>프로필 수정하기<EditProfileModal user={user} show={modalprofile} toggleprofile={toggleprofile} /></button>
                    <h2 />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>신청중인 방</text>
                    <h2 />
                    <Paper className={classes.paper1}>
                        <text>신청 중인 방이 없습니다.</text>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>참가하는 방</text>
                    <h2 />
                    <Paper className={classes.paper1} textSize={"15px"}>
                        { rooms && rooms.map(r => <Enterlist key={r.id} room={r} />)}
                        { (rooms===undefined || rooms.length==0) && <text>참가 중인 방이 없습니다.</text>}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>완결낸 작품</text>
                    <h2 />
                    <Paper className={classes.paper1}>
                        <text>완결 낸 작품이 없습니다.</text>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};
function Enterlist(props) {
    const classes = useStyles();
    const r = props.room;
    return (
    <Paper className={classes.paper1} textSize={"13px"} style={{textAlign: "center", marginBottom: "10px"}}>
        <Link to={{
            pathname : `/writingroom/${r.id}`,
            state : {
                info: r.info,
                characters: r.characters
            }
        }}><img src={r.info.profilePic} style={{width:200, height:200}}/></Link>
        <br />
        <Link to={{
            pathname : `/writingroom/${r.id}`,
            state : {
                info: r.info,
                characters: r.characters
            }
    }}>{r.info.title}</Link>
    <br />
    {r.info.hashtag}
    <br />
    </Paper>
    ) //r.id = room id 입니다

}
export default ProfilePage;

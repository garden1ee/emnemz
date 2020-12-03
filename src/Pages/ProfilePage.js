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
                <Grid item xs={4}>
                    <div
                        style={{
                            background: `url(${photoURL || 'https://i.ibb.co/gFDFRHf/1-W35-QUSv-Gpc-Lux-Po3-SRTh6w.png'})  no-repeat center center`,
                            backgroundSize: "cover",
                            height: "300px",
                            width: "300px"
                        }}
                    ></div>
                </Grid>
                <Grid item xs={8}>
                    <br />
                    <Paper className={classes.paper1} fontSize={"15px"} style={{padding: "30px"}}>
                        <h6>이름:{displayName}</h6>
                        <h6>관심분야:#모험#만화#웹툰</h6>
                        <h6>방 개설 횟수:0</h6>
                        <h6>방 참여 횟수:0</h6>
                        <h6>완결 편수:0</h6>
                        <br />
                        <button onClick={toggleprofile}>프로필 수정하기<EditProfileModal user={user} show={modalprofile} toggleprofile={toggleprofile} /></button>
                    <br />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <span style={back}>신청중인 방</span>
                    <br /><br />
                    <Paper className={classes.paper1}>
                        <span>신청 중인 방이 없습니다.</span>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <span style={back}>참가하는 방</span>
                    <br /><br />
                    <Paper className={classes.paper1} fontSize={"15px"}>
                        { rooms && rooms.map(r => <Enterlist key={r.id} room={r} />)}
                        { (rooms===undefined || rooms.length==0) && <span>참가 중인 방이 없습니다.</span>}
                    </Paper>
                </Grid>
            
                <Grid item xs={4}>
                    <span style={back}>완결낸 작품</span>
                    <br /><br />
                    <Paper className={classes.paper1}>
                        <span>완결 낸 작품이 없습니다.</span>
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
    <Paper className={classes.paper1} fontSize={"13px"} style={{textAlign: "center", marginBottom: "10px"}}>
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

import React, { useState,useContext } from "react";
import { UserContext } from "../Components/UserProvider";
import {auth} from "../firebase";
import {makeStyles} from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import EditProfileModal from '../Pages/Mainpages/Modals/EditProfileModal.js';
import EnterRoomModal from '../Pages/Mainpages/Modals/EnterRoomModal.js';
import TableRow from '@material-ui/core/TableRow'
import RoomRequestModal from './Mainpages/Modals/RoomRequestModal.js';
import RoomCompleteModal from './Mainpages/Modals/RoomCompleteModal.js';

const customer = [
    {
        'number': "1",
        'id': "소설보기",
        'image': 'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
        'name': '루피의 모험',
        'birthday': '#원피스 #루피',
        'score': '모집인원 2/5명',
    },
    {
        'number': "2",
        'id': "소설보기",
        'image': "https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
        'name': '나루토 성장시키기 방입니다',
        'birthday': "#나루토 #사스케",
        'score': '모집인원 1/5명',
    },
    {
        'number': "3",
        'id': "소설보기",
        'image': "https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
        'name': '이태원 클라쓰 if 소설',
        'birthday': '#이태원클라쓰 #배우 #드라마',
        'score': '모집인원 2/7명',
    }]


const customer2 = [
    {
        'number': "1",
        'id': "소설보기",
        'image': 'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
        'name': '루피의 모험',
        'birthday': '#원피스 #루피',
        'score': '4.89/5점',
        'genre': "장르: 모험, 액션",
    },
    {
        'number': "2",
        'id': "소설보기",
        'image': "https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
        'name': '나루토 성장시키기 방입니다',
        'birthday': "#나루토 #사스케",
        'score': '4.89/5점',
        'genre': "장르: 모험, 액션",
    },
    {
        'number': "3",
        'id': "소설보기",
        'image': "https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
        'name': '이태원 클라쓰 if 소설',
        'birthday': '#이태원클라쓰 #배우 #드라마',
        'score': '4.89/5점',
        'genre': "장르: 스릴러, 액션",
    }]

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
    const { photoURL, displayName, email } = user;

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
                        <h2><text marginLeft={30} /></h2>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <Grid item xs={8}>
                        <h2 />
                        <Paper className={classes.paper1} textSize={"15px"}>
                            <text>이름:{displayName}</text>
                            <h2 />
                            <text>관심분야:#모험#액션#만화</text>
                            <h2 />
                            <text>방 개설 횟수:0</text>
                            <h2 />
                            <text>방 참여 횟수:0</text>
                            <h2 />
                            <text>완결 편수:0</text>
                            <h2 />
                            <h2 />
                            <button onClick={toggleprofile}>프로필 수정하기<EditProfileModal show={modalprofile} toggleprofile={toggleprofile} /></button>
                            <h2 />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>신청중인 방</text>
                    <h2 />
                    <Paper className={classes.paper1}>
                        {
                            customer.map(c => {
                                return (
                                    <RoomRequestModal c={c} />
                                )
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>참가하는 방</text>
                    <h2 />
                    <Paper className={classes.paper} textSize={"15px"}>
                        <button onClick={toggleroom}><img src={'https://lh3.googleusercontent.com/proxy/VBpaCKJuzYhJb04fUMa9DOqH6ydDIU5l4p-DvPzXeimL1Mm5z74xVnROWYtdWGxe8Qi0tblWbbqks75ORnje3EoWZSEwvsjFwdVU9uNIo77hEcoNrlGbi9SgZQjwvP0j8D-HZGf--x4vls4'} style={{
                            width: '260px', textAlign: 'center', height: '250px'
                        }} alt={"profile"} /><EnterRoomModal show={modalroom} toggleroom={toggleroom} /></button>
                        <h2 />
                        <Grid xs={12}>
                            <text>   연애혁명 방입니다~
          <h2 />   #왕자림 걸크러쉬 #공주영 쏘 스윗 ㅠㅠ<h2 />   <div className="row" style={{ marginLeft: "2px", marginTop: "4px", marginBottom: "5px"}}>모집입원: 2/5명</div>
                                <div className="row" style={{ margin: "2px", marginTop: "4px", marginBottom: "4px"}}>
                                    <button onClick={toggleroom}>방 들어가기<EnterRoomModal show={modalroom} toggleroom={toggleroom} /></button>
                                </div>

          </text>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <text style={back}>완결낸 방</text>
                    <h2 />
                    <Paper className={classes.paper1}>
                        {
                            customer2.map(c => {
                                return (<RoomCompleteModal c={c} />
                                )
                            })
                        }
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};
class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalIsOpen: false
        };
    }
    render() {
        let setModalClose = () => this.setState({ setModalIsOpen: false });
        return (
            <TableRow>
                <h2 /><img src={this.props.image} width="260" height="250" alt="profile" />
                <h2 /><text style={stly}>{this.props.name}</text>
                <h2 /><text style={stly}>{this.props.birthday}</text>
                <h2 /><text style={stly}>{this.props.score}</text>
            </TableRow>
        )
    }
}
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <a marginLeft={3} href="">{this.props.name}</a>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.score}</p>
            </div>
        )
    }
}
export default ProfilePage;

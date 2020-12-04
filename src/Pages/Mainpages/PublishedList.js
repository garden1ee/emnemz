import React, {useContext, useState} from 'react';
import TableRow from '@material-ui/core/TableRow'
import PublishInfoModal from './Modals/PublishInfoModal.js';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import { UserContext } from "../../Components/UserProvider";
import { auth, firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


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

const customer1=[
    {
        'number': "1",
  'id':"소설보기",
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'루피의 모험',
  'birthday':'#원피스 #루피',
  'score':'4.89/5점',
},
    {
    'number': "2",
  'id':"소설보기",
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'birthday':"#나루토 #사스케",
  'score':'4.89/5점',
}]

const customer=[
    {
        'number': "1",
  'id':"소설보기",
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'루피의 모험',
  'birthday':'#원피스 #루피',
  'score':'4.89/5점',
},
    {
    'number': "2",
  'id':"소설보기",
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'birthday':"#나루토 #사스케",
  'score':'4.89/5점',
},
    {
    'number': "3",
  'id':"소설보기",
  'image':"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  'name':'이태원 클라쓰 if 소설',
  'birthday':'#이태원클라쓰 #배우 #드라마',
  'score':'4.89/5점',
}]

const searchbarstyle={
    color: "black",
    background: "#C4C4C4",
    fontSize: 17,
    marginLeft:0,
    height: 29,
    width: "auto",
    marginRight: 10,
}
const PublishedList =() => {
  
    const roomsRef = firestore.collection('rooms');
    const user = useContext(UserContext);
    const { photoURL, displayName, email, uid } = user;
    const query = roomsRef.where("users","array-contains", uid );
    const [rooms] = useCollectionData(query, { idField: 'id' });
    const classes=useStyles();
    const [isShown, setShown] = useState(false);
   // const messages=useCollectionData(firestore.collection(`scripts_1`)).orderBy('createdAt').limit(25);

   /*let updateOriginal = async function(room){
    const roomRef = firestore.doc(`rooms/${room.id}`);
    await roomRef.set({
        completed: false
    },{merge: true});
    }*/

    const novelShown = () => {
        setShown(true);
    }
    const closeShow = () => {
      setShown(false);
      
    }
    return(
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={6}>
            <input style={searchbarstyle}/>
            <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
          </Grid>
          <Grid item xs={6}>
            <ui class="searchbar_char">
              <text style={stly}>해시태그:</text>
              <select name="job">
                <option value="">소설</option>
                <option value="fantagy">판타지</option>
                <option value="cartoon" selected="selected">만화</option>
                <option value="drama">드라마</option>
              </select>&nbsp;&nbsp;&nbsp;
                <text style={stly}>정렬:&nbsp;&nbsp;&nbsp;</text>
              <select name="job">
                <option value="most">최신순</option>
                <option value="popular">인기순</option>
                <option value="" selected="selected">평점순</option>
                <option value="">검색순</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ui>
          </Grid>
         
            <Grid item xs={4}>
              
              <Paper fontSize={"15px"} className={classes.paper1}>
              { rooms && rooms.map(r => 
              {return r.completed ?
                <div>
              <Enterlist key={r.id} room={r} /> 
              <button type="btn btn-primary" onClick={() => novelShown()}>
                작품 보러 가기 
              </button>
              <Dialog open={isShown}>
                <DialogContent>
                  
                
                 { r.messages && r.messages.map((message) =>
                  <div>{message.character + ":" + " " + message.text + " "}
                   <br></br>
                    </div>
                   
                    )
                  }
                </DialogContent>
                <button type="button" class="btn btn-default" class="x_button"
                                onClick={closeShow} class="right_align1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                        </button>
              </Dialog>
              </div>

               :
               <></>
              }
              )}
                        { (rooms===undefined || rooms.length==0) && <text>완결 작품이  없습니다.</text>}
                  
                       
              </Paper>
              
            </Grid>
          
        </Grid>

    );
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

class Customer extends React.Component{
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
        <h2/><img src= {this.props.image} width="200" height="200" alt="profile"/>
        <h2/><text style={stly}>{this.props.name}</text>
        <h2/><text style={stly}>{this.props.birthday}</text>
        <h2/><text style={stly}>{this.props.score}</text>
        <h2/><button style={stly} onClick={() => this.setState({ setModalIsOpen: true })}>{this.props.id}</button>
            <PublishInfoModal show={this.state.setModalIsOpen} onHide={setModalClose} />

      </TableRow>
    )
  }
}
class CustomerProfile extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.image} alt="profile"/>
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}
class CustomerInfo extends React.Component{
  render(){
    return(
      <div>
        <a marginLeft={3} href="">{this.props.name}</a>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.score}</p>
      </div>
    )
  }
}
export default PublishedList;
//  { (rooms===undefined || rooms.length==0) && <text> 완결 된 작품이 아직 없습니다.</text>}
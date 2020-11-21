import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import React, {Component} from 'react';
import  '../style/WritingRoom.css';
import { Link, Route, BrowserRouter} from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import customer, {Customer} from "./Mainpages/PublishedList";
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon, MDBBtn} from "mdbreact";
import aron_img from "./Images_character/aron.png";
import ruffi_img from "./Images_character/ruffi.png";
import DiscussionModal from './DiscussionModal';


class ChatPage extends Component {
constructor() {
super();
this.state = {
friends: [
{
name: "루피",
avatar: "ruffii.png",
message: "너 정말 나미를 죽인거냐",
when: "Just now",
toRespond: 1,
seen: false,
active: true
},
{
name: "나미",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1",
when: "5 min ago",
toRespond: 0,
seen: false,
active: false
},
{
name: "Alex Steward",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2",
when: "Yesterday",
toRespond: 0,
seen: false,
active: false
},
{
name: "Ashley Olsen",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3",
when: "Yesterday",
toRespond: 0,
seen: false,
active: false
},
{
name: "Kate Moss",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4",
when: "Yesterday",
toRespond: 0,
seen: false,
active: false
},
{
name: "Lara Croft",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
when: "Yesterday",
toRespond: 0,
seen: false,
active: false
},
{
name: "Brad Pitt",
message: "Lorem ipsum dolor sit",
avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
when: "5 min ago",
toRespond: 0,
seen: true,
active: false
}
],
messages: [
  {
  author: "루피",
  avatar: ruffi_img,
  message: "너 정말 나미를 죽인거냐",
  when: "Just now",
  toRespond: 1,
  seen: false,
  active: true
  },
  {
  author: "아론",
  avatar: aron_img,
  message: "그래서 나보고 어쩌라는 거냐 ",
  when: "5 min ago",
  }
]
};
}

render() {
  return (
    <div>
         <MDBCol md="6" xl="8">
        <MDBRow>
          <MDBListGroup>
            {this.state.messages.map(message => (
            <ChatMessage key={message.author} message={message} />
            ))}
         
                </MDBListGroup>
              </MDBRow>
              </MDBCol>

     
        
            <div className="form-group basic-textarea">
              <div>
                <button type="button"  class="btn btn-primary" 
                  style={{position: "absolute", left:10, bottom:50}}>
                      대사
                </button>
                <button type="button"  class="btn btn-default" 
                  style={{position: "absolute", left:60, bottom:50}}>
                      액션
                </button>
                <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" 
                  style={{width: 1000, position: "absolute", left:130, bottom:50}}
                  placeholder="대사를 입력하세요" />
                  
                <button type="button"  class="btn btn-default" 
                  style={{position: "absolute", left:1160, bottom:80}}>
                      대사
                </button>
                <button type="button"  class="btn btn-default" 
                  style={{position: "absolute", left:1160, bottom:80}}>
                      액션
                </button>
              </div>
            </div>
    </div>

    );
  }
}

const Friend = ({
  friend: { name, avatar, message, when, toRespond, seen, active }
}) => (
  <MDBListGroupItem
    href="#!"
    className="d-flex justify-content-between p-2 border-light"
    style={{ backgroundColor: active ? "#eeeeee" : "" }}
  >
    <img src={avatar} alt="character"/>
   
    <div style={{ fontSize: "0.95rem" }}>
      <strong>{name}</strong>
      <p className="text-muted">{message}</p>
    </div>
    <div>
      <p className="text-muted mb-0" style={{ fontSize: "0.75rem" }}>
        {when}
      </p>
      {seen ? (
        <span className="text-muted float-right">
          <MDBIcon className="fa-check" aria-hidden="true" />
        </span>
      ) : toRespond ? (
        <MDBBadge color="danger" className="float-right">
          {toRespond}
        </MDBBadge>
      ) : (
        <span className="text-muted float-right">
          <MDBIcon icon="reply" aria-hidden="true" />
        </span>
      )}
    </div>
  </MDBListGroupItem>
);

const ChatMessage = ({ message: { author, avatar, when, message } }) => (
  <li className="chat-message d-flex justify-content-between mb-4">
    <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    
    <MDBCard>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{author}</strong>
          <small className="pull-right text-muted">
            <i className="far fa-clock" /> {when}
          </small>
        </div>
        <hr />
        <p className="mb-0">{message}</p>
      </MDBCardBody>
    </MDBCard>
  </li>
);


class WritingRoom extends Component{
  constructor(props){
    super(props);
    this.state={
      id: 0,
      agree_num: 0,
      participant_num: 0,
      invite_open: false,
      publish_open: false,
      published: false,
      customer:
        {
        'id':1,
        'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
        'name':'루피의 모험',
        'genre': '모험, 판타지, 팬소설',
        'birthday':'#원피스 #루피',
        'novel_summary':'주인공 루피와 조로와 나미가 함께 모험을 떠났는데 그때 만난 적 아론!!',
        'author_saying': '저희 즐겁게 잘 썼습니다.'
        
         
      },
      isDiscussion: false

    };
  }
    publishClickOpen = () =>{
    

      this.setState({
        publish_open: true,
      });
    }

    publish = () => {
     
     

      this.setState({
        publish_open: false,
        published: true
      });
    }

    publishClose = () => {
      this.setState({
        publish_open: false
      });
    }

    inviteClickOpen = () =>{
      this.setState({
        publish_open: this.state.publish_open,
        invite_open: true
      });
    }

    invite = () => {
      // 친구 초대하기 
     
      this.inviteClose();
    }

    inviteClose = () =>{
      this.setState({
        invite_open: false
      });
    }

    publishAgree = () =>{
      if(this.state.agree_num > 0 && this.state.agree_num === this.state.participant_num){
         
      // 채팅한거 모아서 만드는 과정
      // 만든 컨텐츠를 완결 작품들로 정보 보내기

        this.state.agree_num = 0;
      }
    }

    open_discussion = () =>{
      this.setState({
      isDiscussion: true
      });
    }
    closed_discussion = () =>{
      this.setState({
        isDiscussion: false
      });
    }
    render() {

      const { classes } = this.props;

      return(  <div class="all">
           
      <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">novel room name</a>
            </div>
            <DropdownButton id="dropdown-basic-button" title="" class="nav_loc" 
              onSelcet={(eventKey) => console.log(eventKey)}>
            <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
          <div>
          <Dropdown.Item eventKey="participant_lists">
           <a href="">참여자 목록</a></Dropdown.Item>
          <Dropdown.Item eventKey="novel_info">소설 정보</Dropdown.Item>
          <Dropdown.Item eventKey="communication_display">대화창</Dropdown.Item>
      </div>
      </DropdownButton> 
             
          </div>
      </nav>
        
       <BrowserRouter>
         <ChatPage/>
         </BrowserRouter>
       
      <div class="column">

      <button type="button" class="dicussion_room" class="btn btn-default" class="right_align1"
      onClick={this.open_discussion}> 
      
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
       </svg>
       
      </button>
      <Dialog open={this.state.isDiscussion}>
         
        <div>
          <DialogContent>
          <button type="button" class="btn btn-default" class="x_button"
          onClick={this.closed_discussion} class="right_align1">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </svg>
            </button>
          </DialogContent>
         
        <DialogContent style={{width: 1500, height:1000, align: "center"}}>
        <DiscussionModal/>
        </DialogContent>
        </div>

        </Dialog>
      <button type="button" class="vote_button" class="btn btn-default" class="right_align2">
      <Link to="">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
        </Link>
      </button>
      <button variant="contained" class="invite_button" type="button" class="btn btn-default" class="right_align3"
      onClick={this.inviteClickOpen}>
          <div to="">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
       </svg>
       </div>
       </button>
       <Dialog open={this.state.invite_open} onClick={this.inviteClose}>
          초대 할 친구 목록
        <div>
        <DialogContent>
          친구 
          <button type="button" class="btn btn-default" onClick={this.invite}></button>
        </DialogContent>
        </div>
        </Dialog>
       <div>
       
       
          <div>
         
  <button type="button" variant="contained" class="btn btn-default" 
  class="right_align4" onClick={this.publishClickOpen}>
          출판
             
        </button>
        <Dialog open={this.state.publish_open} onClick={this.publishClose}>
          작품을 출판하시겠습니까? 출판 전, 작품에 들어갈 정보를 
          점검해주세요. 
        <div>
        <DialogContent>
        <button onClick={this.publish}>
            네
        </button>
        </DialogContent>

        <DialogContent>
        <button variant="contained" class="btn btn-default" onClick={this.publishClose}>
          아니오
        </button>
        </DialogContent>
        </div>

        </Dialog>
       
        <Dialog open={this.state.published} onClick={this.state.published = false}
        style={{width: 700, height: 700}}>
          소설 정보
        <div>
        <DialogContent>
        <TableRow>
        <TableCell><img src= {this.state.customer.image} width="200" height="200" alt="profile"/></TableCell>
        <TableCell>작품명 {this.state.customer.name}</TableCell>
        
        <TableCell> 해시 태그 {this.state.customer.birthday}</TableCell>
        <TableCell>{this.state.customer.gender}</TableCell>
      </TableRow>
         
        </DialogContent>

        <DialogContent>
        <button onClick={this.publish_agree}>
            확인
        </button>
        </DialogContent>

        <DialogContent>
        <button variant="contained" class="btn btn-default" onClick={this.state.published = false}>
          취소
        </button>
        </DialogContent>
        </div>

        </Dialog>
       
       </div>
     </div>
      </div>
   
     
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
   <script type="text/javascript" src="Scripts/boostrap.min.js"></script>
   <script type="text/javascript" src="Scripts/jquery-2.1.1.min.js"></script>
   <script type="text/javascript" src="js/bootstrap/bootstrap-dropdown.js"></script> 
 
  <link href="css/boostrap/css" rel="stylesheet"></link>
   </div>
       
      );
    }
}

export default WritingRoom;

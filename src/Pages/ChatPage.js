import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon, MDBBtn} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
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
                      placeholder="Type your message here..." />
                      
                      <button type="button"  class="btn btn-default" 
                      style={{position: "absolute", left:1160, bottom:80}}>
                          전송
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
    
    export default ChatPage;
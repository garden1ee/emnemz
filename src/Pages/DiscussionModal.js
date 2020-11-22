import React, {Component} from 'react';
import  '../../src/style/WritingRoom.css';
import {MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import ChatMessage from "./ChatMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

class DiscussionModal extends Component {
constructor() {
super();
this.state = {
  isOpen: false,
messages: [
  {
  author: "루피",
  avatar: ruffi_img,
  message: "아론씨 캐릭터 묘사가 부족해요",
  when: "Just now",
  toRespond: 1,
  seen: false,
  active: true
  },
  {
  author: "아론",
  avatar: aron_img,
  message: "혹시 어느 부분 말씀하시는 건가요",
  when: "5 min ago",
  }
]
};
}
Open = () =>{
  this.setState({
      isOpen: true
  });
}

Close = () =>{
  this.setState({
      isOpen: false
  });
}

render() {
return (
  <div>
    <a className="Wr-sidebar-comp" >
      <FontAwesomeIcon icon={faComments} onClick={this.Open}/>
        <p>토론방</p>
    </a>
    <Dialog open={this.state.isOpen}>
 
       <DialogContent style={{width: 1000, height: 1000}}>
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
             
                <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" 
                  style={{width: 500, position: "absolute", left:10, bottom:50}}
                  placeholder="Type your message here..." />
                  
                  <button type="button"  class="btn btn-default" 
                  style={{position: "absolute", left:520, bottom:80}}>
                      전송
                    </button>
                    </div>
              </div>
              
              </DialogContent>
              <p onClick={this.Close} style={{position: "absolute", right:10, top:10}}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </p>
          </Dialog>
            </div>

    );
  }
}




export default DiscussionModal;
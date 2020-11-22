import React, {Component} from 'react';
import  '../../src/style/WritingRoom.css';
import {MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import ChatMessage from "./ChatMessage";

class DiscussionModal extends Component {
constructor() {
super();
this.state = {
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
             
                <textarea className="form-control pl-2 my-0" id="exampleFormControlTextarea2" 
                  style={{width: 500, position: "absolute", left:10, bottom:50}}
                  placeholder="Type your message here..." />
                  
                  <button type="button"  class="btn btn-default" 
                  style={{position: "absolute", left:520, bottom:80}}>
                      전송
                    </button>
                    </div>
              </div>
            </div>

    );
  }
}




export default DiscussionModal;
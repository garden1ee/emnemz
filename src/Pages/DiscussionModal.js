import React, {Component} from 'react';
import  '../../src/style/WritingRoom.css';
import {MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import { MDBCard, MDBCardBody} from "mdbreact";
import TableRow from '@material-ui/core/TableRow';


const ChatMessage = ({ message: { character, avatar, when, message, isScript } }) => 
  <div>
    <div>
{(isScript  
    ? <li className="chat-message  d-flex justify-content-between mb-4">
  
    <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    
    <MDBCard style={{borderRadius: "20%"}}>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{character}</strong>
         
        </div>
        <hr />
     
        <p className="mb-0">{message}  </p>
       
      </MDBCardBody>
    </MDBCard>
    <small className="pull-right text-muted">
            <i className="far fa-clock"/> {when}
          </small>
    
   
   
  </li>
  
  : <li className="chat-message  d-flex justify-content-between mb-4">
     <TableRow>
  <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />

  <MDBCard>
    <MDBCardBody>
      <div>
        <strong className="primary-font">{character}</strong>
       
      </div>
      <hr />
   
      <p className="mb-0">{message}  </p>
     
    </MDBCardBody>

  </MDBCard>

 
 
  
  <small className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>
        </TableRow>
   
</li>

)}

</div>


</div>

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
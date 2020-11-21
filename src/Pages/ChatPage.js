import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import ChatMessage from "./ChatMessage";

class ChatPage extends Component {
    constructor() {
    super();
    this.state = {
    messages: [
      {
      author: "루피",
      avatar: ruffi_img,
      message: "너 정말 나미를 죽인거냐",
      when: "Just now",
      toRespond: 1,
      seen: false,
      active: true,
      isScript: true
      },
      {
      author: "아론",
      avatar: aron_img,
      message: "아론이 성큼 성큼 루피에게 다가왔다.",
      when: "5 min ago",
      isScript: false
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
                
         
            
              
                </div>
    
        );
      }
    }
    
   

    

   
    
    export default ChatPage;
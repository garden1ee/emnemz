import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
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
            author: "나미",
            avatar: nami_img,
            message: "아론 거기서",
            when: "Just now",
            toRespond: 1,
            seen: false,
            active: true,
            isScript: true
            }
    ],
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
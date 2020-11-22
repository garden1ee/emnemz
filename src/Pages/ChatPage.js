import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import { getRoomDocument, getScript } from "../firebase";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
import ChatMessage from "./ChatMessage";



class ChatPage extends Component {
    constructor(props) {
    super(props);
    this.state = {scripts:[]};
    }
    componentDidMount = async () => {
      const room_id = this.props.roomid;
      const scriptDB = await getScript(room_id);
      if (scriptDB) {
        const {scripts} = scriptDB;
        this.setState({scripts: scripts});
      }
    };
    render() {
    return (
      <div>
          <MDBCol md="6" xl="8">
            <MDBRow>
              <MDBListGroup>
                {this.state.scripts.map(message => (
                <ChatMessage message={message} />
                ))}
              </MDBListGroup>
            </MDBRow>
          </MDBCol>   
      </div>
    )};
  }
    
   

    

   
    
    export default ChatPage;
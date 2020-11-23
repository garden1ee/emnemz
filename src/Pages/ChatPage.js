import React, {Component, useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import { getRoomDocument, getScript, firestore } from "../firebase";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
import ChatMessage from "./ChatMessage";



const ChatPage = (props) => {
    const [scripts, setScripts] = useState([]);
    const [news, setNews] = useState(true);
    const room_id = props.roomid;
    useEffect(() => {
      firestore.doc(`rooms/${room_id}`).onSnapshot(setNews(true));
      async function loadScript() {
        const scriptDB = await getScript(room_id);
        const { scripts } = scriptDB;
        setScripts(scripts);
      };
      if (news==true) {
        loadScript();
        setNews(false);
      }
      
    })
    return (
      <div>
          <MDBCol md="6" xl="8">
            <MDBRow>
              <MDBListGroup><div>{console.log(scripts)}</div>
                {scripts.map(message => (
                <ChatMessage message={message} />
                ))}
              </MDBListGroup>
            </MDBRow>
          </MDBCol>   
      </div>
    );
  }
    
    export default ChatPage;
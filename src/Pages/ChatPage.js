import React, {Component, useState, useRef } from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import firebase from "firebase/app";
import { auth, getRoomDocument, getScript, firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./ChatMessage";



function ChatPage(props) {
  const dummy = useRef();
  const messagesRef = firestore.collection('scripts');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          character: props.myCharName, //character 이름 받아와서 넣기
          isScript: true, //대사,액션 버튼 만들어 알맞게 넣기
          photoURL: props.myCharPic
      })

      setFormValue('');
      if(dummy) dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
    return (
      <div>
          <MDBCol md="11">
            <MDBRow>
              <MDBListGroup>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
              </MDBListGroup>
            </MDBRow>
          </MDBCol>
          <MDBCol md="11">
          <button id="characterSelect"><img id="userCharacterImg" /></button>
          <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>대사</button>

        </form>
          </MDBCol>   
      </div>
    );
  }

export default ChatPage;
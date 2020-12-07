import React, {Component, useState, useRef } from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import firebase from "firebase/app";
import { auth, getRoomDocument, getScript, firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from "./ChatMessage";



function ChatPage(props) {
  const dummy = useRef();
  const messagesRef = firestore.collection(`scripts_${props.id}`);
  const query = messagesRef.orderBy('createdAt').limit(10000);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const [isScriptVal, setIsScript] = useState(true);
  const [editid, setEditid] = useState('');

  const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      if (editid!=='') {
        await messagesRef.doc(editid).set({
          text: formValue,
          isScript: isScriptVal
        }, {merge: true});
        setEditid('');
        setFormValue('');
      }
      else {
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          character: props.myCharName, //character 이름 받아와서 넣기
          isScript: isScriptVal, //대사,액션 버튼 만들어 알맞게 넣기
          photoURL: props.myCharPic
        })
        setFormValue('');
        if(dummy) dummy.current.scrollIntoView({ behavior: 'smooth' });
      }
  }
  async function onEdit(text,id) {
    setFormValue(text);
    setEditid(id);
  }
    return (
      <div>
          <div className="WR-MainArea">
            <MDBRow>
              <MDBListGroup>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} onEdit={onEdit}/>)}
                <span ref={dummy}></span>
              </MDBListGroup>
            </MDBRow>
          </div>
          <div className="WR-scriptbar">
          <form onSubmit={sendMessage}>
          <button id="characterSelect"><img id="userCharacterImg" src={props.myCharPic} style={{width: 50, height: 50, borderRadius: 50/ 2}}/></button>
            <input className="scriptInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="대사를 입력하세요" />
          <div className="WR-submitBtn">
            <button type="submit" onClick={() => setIsScript(true)} disabled={!formValue}>대사</button>
            <button type="submit" onClick={() => setIsScript(false)} disabled={!formValue}>액션</button>
          </div>
        </form>
          </div>   
      </div>
    );
  }

export default ChatPage;
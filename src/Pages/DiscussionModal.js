import React, { Component, useRef, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { UserContext } from "../Components/UserProvider";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import  '../../src/style/WritingRoom.css';
import {MDBRow, MDBCol, MDBListGroup} from "mdbreact";

function DiscussionModal(props) {
  const auth= firebase.auth();
  const firestore=firebase.firestore();
  const dummy = useRef();
  const messagesRef1 = firestore.collection(`discussions_${props.id}`);
  const query = messagesRef1.orderBy('createdAt').limit(25);

  const [discussion] = useCollectionData(query, { idField: 'id' });

  const [formValue1, setFormValue1] = useState('');
  const user = useContext(UserContext);
  const { photoURL, displayName, email, uid } = user;

  const sendMessage = async (e) => {
      e.preventDefault();

      await messagesRef1.add({
          text: formValue1,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          displayName,
          photoURL
      })

      setFormValue1('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
  }


return (
  <div>
      <div id="discussContainer">
            {discussion && discussion.map(message => (
            <Messages key={message.id} message={message} />
            ))}
            <span ref={dummy}></span>
      </div>
      <div id="discussTextarea">
        <form onSubmit={sendMessage}>
            <input id="DinputArea" value={formValue1} onChange={(e) => setFormValue1(e.target.value)} placeholder="참여자들에게 하고 싶은 말이 있나요?" />

            <button id="Dsubmit" type="submit" disabled={!formValue1}>전송</button>

        </form>
      </div>
  </div>
     
        
    );
}
function Messages(props) {
  const auth= firebase.auth();
  const { text, uid, photoURL, displayName } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
      <div className={`message ${messageClass}`}>
          <div className="profileDiv"><img src={photoURL || 'https://i.ibb.co/ChncsT7/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>
          <p>{displayName}</p></div>
          <div className="textball">{text}</div>
      </div>
  </>)
}


export default DiscussionModal;
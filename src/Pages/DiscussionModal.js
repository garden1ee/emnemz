import React, { Component, useRef, useState } from 'react';
import firebase from 'firebase/app';
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


  const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef1.add({
          text: formValue1,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
      })

      setFormValue1('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
  }


return (
  <div>
      <MDBCol md="6" xl="8">
        <MDBRow>
          <MDBListGroup>
            {discussion && discussion.map(message => (
            <Messages key={message.id} message={message} />
            ))}
            <span ref={dummy}></span>
         
          </MDBListGroup>
        </MDBRow>
      </MDBCol>
      <div className="form-group basic-textarea">
        <form onSubmit={sendMessage}>
            <input className="form-control pl-2 my-0" value={formValue1} onChange={(e) => setFormValue1(e.target.value)} placeholder="say nice" />

            <button type="submit" disabled={!formValue1}>입력</button>

        </form>
      </div>
  </div>
     
        
    );
}
function Messages(props) {
  const auth= firebase.auth();
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
      <div className={messageClass}>
          <img src={photoURL || 'https://i.ibb.co/ChncsT7/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'} />
          <p>{text}</p>
      </div>
  </>)
}


export default DiscussionModal;
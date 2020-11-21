import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { RoomList, PublishedList, ProfilePage, MyPage } from 'Pages/Mainpages';
import { auth } from "../firebase";
import 'style/Modal.css';
import AlarmModal from './Mainpages/AlarmModal.js';


const btnstyle1={
  display:'flex',
  background:"#263343"
}

const btnstyle={
  border: 0,
  background: "#263343",
  fontSize: 36,
}

const stnstyle={
  border: 0,
  background: "#263343",
  fontSize: 24,
  marginLeft:30,
}

const Header = () => {
    

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="main header">
        <nav style={btnstyle1} className="navbar">
          <button style={btnstyle} className="header"><Link to="/list">Yu칼노리</Link></button>
          <button style={stnstyle} className="header"><Link to="/list">소설 작성방</Link></button>
          <button style={stnstyle} className="header"><Link to="/library">완결 작품들</Link></button>
          <button style={stnstyle} className="header"><Link to="/mypage">마이 페이지</Link></button>
                  <button style={stnstyle} className="header-modalbutton" onClick={toggle}>알림
                  <AlarmModal show={modal} toggle={toggle}/></button>
          <button style={stnstyle} className="header"><Link to="/mypage">설정</Link></button>
          <button style={stnstyle} className="header" onClick = {() => {auth.signOut();}}><Link to="/">로그아웃</Link></button>
          <hr></hr>
        </nav>
      </div>
      <Route path="/library" component={PublishedList}/>
      <Route path="/mypage" component={MyPage}/>
      <Route path="/list" component={RoomList}/>
      <Route exact path="/" component={ProfilePage}/>
    </div>
  )
};

export default Header;

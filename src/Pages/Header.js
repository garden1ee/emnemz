import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { RoomsList, PublishedNovels, ProfilePage } from 'Pages/Mainpages';
import { auth } from "../firebase";
import '../style/Header.css';
import 'style/Modal.css';
import AlarmModal from './Mainpages/Modals/AlarmModal.js';

const Header = () => {
    

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [active, setActive] = useState("");
    const togglea = (event) => {
      const { id } = event.target;
      if (active === id) {
        setActive("");
      } else {
        setActive(id);
        console.log(active);
      }
    }


  return (
    <div className="HD-header">
      <ul className="HD-navbar">
        <li><Link to="/list" className="Hd-link HD-logo">롤링롤링</Link></li>
        <li><Link to="/list" id="Hd-list" className={`Hd-link ${active==="Hd-list"? 'Hd-active':""}`}
        onClick={togglea}>소설 작성방</Link></li>
        <li><Link to="/library" id="Hd-pub" className={`Hd-link HD-la ${active==="Hd-pub"? 'Hd-active':""}`}
        onClick={togglea}>완결 작품들</Link></li>
        <div className="HD-rightones">
        <li><Link to="/mypage" id="Hd-My" className={`Hd-link ${active==="Hd-My"? 'Hd-active':""}`}
        onClick={togglea}>마이페이지</Link></li>
        <li><Link to="/mypage" className="Hd-link">알림</Link></li>
        <li><Link to="/mypage" className="Hd-link">설정</Link></li>
        <li onClick = {() => {auth.signOut();}}><Link to="/" className="Hd-link">로그아웃</Link></li>
        </div>
      </ul>
      <hr></hr>
      <Route path="/library" component={PublishedNovels}/>
      <Route path="/mypage" component={ProfilePage}/>
      <Route path="/list" component={RoomsList}/>
      <Route exact path="/" component={ProfilePage}/>
    </div>
  )
};

export default Header;

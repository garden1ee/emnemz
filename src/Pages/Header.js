import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RoomList, PublishedList, ProfilePage, MyPage } from 'Pages/Mainpages';
import { auth } from "../firebase";
import { withTheme } from '@material-ui/core';
import '../style/Header.css';
import CreateRoom from 'Components/CreateRoom';

const Header = () => {
  return (
    <div>
      <ul className="header">
        <li><Link to="/list" className="link logo">롤링롤링</Link></li>
        <li><Link to="/list" className="link">소설 작성방</Link></li>
        <li><Link to="/library" className="link la">완결 작품들</Link></li>
        <div className="rightones">
        <li><Link to="/mypage" className="link right">마이페이지</Link></li>
        <li><Link to="/mypage" className="link right">알림</Link></li>
        <li><Link to="/mypage" className="link right">설정</Link></li>
        <li onClick = {() => {auth.signOut();}}><Link to="/" className="link right">로그아웃</Link></li>
        </div>
      </ul>
      <hr></hr>
      <Route path="/createroom" component={CreateRoom}/>
      <Route path="/library" component={PublishedList}/>
      <Route path="/mypage" component={ProfilePage}/>
      <Route path="/list" component={RoomList}/>
      <Route exact path="/" component={ProfilePage}/>
    </div>
  )
};

export default Header;

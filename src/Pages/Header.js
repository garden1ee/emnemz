import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RoomList, PublishedList, ProfilePage, MyPage } from 'Pages/Mainpages';
import { auth } from "../firebase";
import { withTheme } from '@material-ui/core';


const btnstyle1={
  display:'flex',
  backgroundColor: 'white'
}

const btnstyle={
  border: 0,
  fontSize: 36,

}

const stnstyle={
  border: 0,
  fontSize: 24,
  marginLeft:30,
}

const Header = () => {
  return (
    <div>
      <div style={btnstyle1} className="main header">
        <nav style={btnstyle1} className="navbar">
          <button style={btnstyle} className="header"><Link to="/list">롤링롤링</Link></button>
          <button style={stnstyle} className="header"><Link to="/list">소설 작성방</Link></button>
          <button style={stnstyle} className="header"><Link to="/library">완결 작품들</Link></button>
          <button style={stnstyle} className="header"><Link to="/mypage">마이 페이지</Link></button>
          <button style={stnstyle} className="header"><Link to="/mypage">알림</Link></button>
          <button style={stnstyle} className="header"><Link to="/mypage">설정</Link></button>
          <button style={stnstyle} className="header" onClick = {() => {auth.signOut();}}><Link to="/">로그아웃</Link></button>
          <hr></hr>
        </nav>
      </div>
      <Route path="/library" component={PublishedList}/>
      <Route path="/mypage" component={ProfilePage}/>
      <Route path="/list" component={RoomList}/>
      <Route exact path="/" component={ProfilePage}/>
    </div>
  )
};

export default Header;

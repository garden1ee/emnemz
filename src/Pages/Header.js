import React from 'react';
import { Link, Route } from 'react-router-dom';
import { RoomList, PublishedList, MyPage, Logout } from 'Pages/Mainpages';

const btnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 36,
  marginLeft: 30,
  marginTop: 10,
}

const stnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 24,
  marginLeft:30,
}

const Header = ({match}) => {
  return (
    <div>
      <div className="main header">
          <button style={btnstyle} className="header"><Link to="/list">Service Name</Link></button>
          <button style={stnstyle} className="header"><Link to="/list">Writing Room</Link></button>
          <button style={stnstyle} className="header"><Link to="/library">Finished Works</Link></button>
          <button style={stnstyle} className="header"><Link to="/mypage">My Pages</Link></button>
          <button style={stnstyle}  className="header">Setting</button>
          <button style={stnstyle} className="header"><Link to="/logout">Logout</Link></button>
          <hr></hr>
      </div>
      <Route path="/list" component={RoomList}/>
      <Route path="/library" component={PublishedList}/>
      <Route path="/mypage" component={MyPage}/>
      <Route path="/logout" component={Logout}/>
    </div>
  )
};
export default Header;

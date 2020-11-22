import React, { useContext } from "react";
import { UserContext } from "../Components/UserProvider";
import { Link } from 'react-router-dom';
import {auth, updateScript} from "../firebase";
const ProfilePage = () => {
  const authed = auth.currentUser;
  console.log(authed+'curuser');
  
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;

  console.log(user);
  return (
    <div>
      <div>
        <h2>Welcome!</h2>
        <div
          style={{
            background: `url(${photoURL || 'https://i.ibb.co/gFDFRHf/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
          }}
        ></div>
        <div>
        <h2>{displayName}</h2>
        <h3>{email}</h3>
        </div>
      </div>
      <button onClick = {() => {auth.signOut();}}>로그아웃</button>
      <button onClick = {() => {updateScript(2,{'3':'e'});}}>test</button>
      <Link to="/writingroom/1">방입장test</Link>
    </div>
  ) 
};
export default ProfilePage;
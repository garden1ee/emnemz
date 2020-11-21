import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import '../style/login.css';
/*Guided by Yusuff Faruq's blog post guide: https://blog.logrocket.com/user-authentication-firebase-react-apps/ */

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = (event, email, password) => {
      event.preventDefault();
      try {
      auth.signInWithEmailAndPassword(email, password);
      console.log(auth.currentuser+"signing in");
      }
      catch(error) {
        setError("Error signing in with password and email");
        console.error("Error signing in with password and email", error);
      };
    };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;

          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
      };

  return (
    <div className="content">
      <p className="login-logo">롤링롤링</p>
      <h3>로그인</h3>
      <br/>
      <div>
        {error !== null && (
        <div>
          {error}
        </div>
        )}
        <form>
          <label htmlFor="userEmail">
            이메일: &nbsp;
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="E.g: garden123@gmail.com"
            id="userEmail"
            className="formInput"
            onChange = {(event) => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="userPassword">
            패스워드:
          </label>
          <input
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            className="formInput"
            onChange = {(event) => onChangeHandler(event)}
          />
          <br></br>
          <button 
            className = "submitBtn"
            onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            로그인
          </button>
        </form>
        <br/>
        <p className="alter">
          아직 계정이 없으신가요?{" "}
          <Link to="/signup" className="linki">
            회원가입
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
export default SignIn;
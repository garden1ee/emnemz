import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth, generateUserDocument } from "../firebase";
import '../style/login.css';

const SignUp = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
      history.push('/');
    }
    catch(error){
      setError(`Error ${JSON.stringify(error.errormessage)} Signing up with email and password`);
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <div className="content">
      <h4>반가워요!</h4>
      <h1>회원가입</h1>
      <br/>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form>
          <label htmlFor="displayName">
            닉네임 : &nbsp;
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: 정원"
            id="displayName"
            className="formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="userEmail">
            이메일 : &nbsp;
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: garden123@gmail.com"
            id="userEmail"
            className="formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="userPassword">
            패스워드 :
          </label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            className="formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <button
            className="submitBtn"
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            가입
          </button>
          </form>
          <br/>
          <p className="alter">
          이미 계정이 있으신가요?{" "}
          <Link to="/" className="linki">
            로그인
          </Link>
          </p>
      </div>
    </div>
  );
};
export default SignUp;
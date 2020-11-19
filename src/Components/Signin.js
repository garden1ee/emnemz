import React, {useState} from "react";
import { Link } from 'react-router-dom';
{/*Guided by Yusuff Faruq's blog post guide: https://blog.logrocket.com/user-authentication-firebase-react-apps/ */}

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
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
    <div>
      <h1>Sign In</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <form>
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="E.g: garden123@gmail.com"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value = {password}
            placeholder="Your Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p>or</p>
        <button>
          Sign in with Google
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/login/signup">
            Sign up here
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
export default SignIn;
import React, { useContext } from "react";
import { Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "../Pages/Header";
import { UserContext } from "./UserProvider";
function AuthApplication() {
  const user = useContext(UserContext);
  return (
      user ?
      <Header />
    :
        <Switch>
          <Route path='/signup' component={ SignUp }/>
          <Route path='/' component={ SignIn }/>
        </Switch>
  )};
export default AuthApplication;
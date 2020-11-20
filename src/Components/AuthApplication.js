import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {auth} from "../firebase";
function AuthApplication() {
  const user = auth.currentUser;
  console.log(user);
  return (
        <Switch>
          <Route path='/login/signup' component={ SignUp }/>
          <Route path='/login' component={ SignIn }/>
        </Switch>
  )};
export default AuthApplication;
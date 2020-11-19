import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "../Pages/ProfilePage";
function AuthApplication() {
  const user = null;
  return (
        user ?
        <Switch>
          <Route path='/profile' component={ ProfilePage }/>
        </Switch>
      :
        <Switch>
          <Route path='/login/signup' component={ SignUp }/>
          <Route path='/login' component={ SignIn }/>
        </Switch>

  )};
export default AuthApplication;
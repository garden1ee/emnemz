import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "../Pages/ProfilePage";
const AuthApplication = ({match}) => {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Switch>
          <Route path='/login/signup' component={ SignUp }/>
          <Route path='/login' component={ SignIn }/>
        </Switch>

  )};
export default AuthApplication;
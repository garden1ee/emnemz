import React from "react";
import AuthApplication from "../Components/AuthApplication";
import UserProvider from "../Components/UserProvider";

function Login() {
  return (
    <UserProvider>
      <AuthApplication />
    </UserProvider>
  );
}
export default Login;
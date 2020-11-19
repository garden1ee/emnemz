import React from "react";
import AuthApplication from "./Components/AuthApplication";
import UserProvider from "./providers/UserProvider";

function Login() {
  return (
    <UserProvider>
      <AuthApplication />
    </UserProvider>
  );
}
export default Login;
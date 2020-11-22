import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import UserProvider from "./Components/UserProvider";

const Root = () => (
  <UserProvider>  
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </UserProvider>  
);

export default Root;
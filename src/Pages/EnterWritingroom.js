import React, { useContext } from "react";
import WritingRoomPage from "./WritingroomPage"
import { UserContext } from "../Components/UserProvider";
import { useParams } from 'react-router-dom';

function EnterWritingroom() {
  const id = parseInt(useParams().id, 10);
  const user = useContext(UserContext);
  const {rooms} = user;
  if (rooms.includes(id)) {
      return (
        <WritingRoomPage roomid={id}/>
      )
  }
  else{
    alert("you cannot enter here");
  }

};
export default EnterWritingroom;
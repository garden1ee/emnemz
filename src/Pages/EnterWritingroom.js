import React, { useContext } from "react";
import WritingRoomPage from "./WritingroomPage"
import { UserContext } from "../Components/UserProvider";
import { useParams } from 'react-router-dom';

function EnterWritingroom() {
  const id = parseInt(useParams().id, 10);
  const user = useContext(UserContext);


      return (
        <WritingRoomPage roomid={id} user={user}/>
      )



};
export default EnterWritingroom;
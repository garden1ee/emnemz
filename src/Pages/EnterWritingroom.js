import React, { useContext } from "react";
import WritingRoomPage from "./WritingroomPage"
import { UserContext } from "../Components/UserProvider";

function EnterWritingroom({history}) {
  const {rooms} = useContext(UserContext);
  let { id } = useParams();
  if (rooms.includes(id)) {
      const room = getRoomDocument(id)
      return (
        <WritingRoomPage room={room}/>
      )
  }
  else{
    history.push('/');
  }

};
export default EnterWritingroom;
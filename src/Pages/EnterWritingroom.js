import React, { useContext } from "react";
import WritingRoomPage from "./WritingroomPage"
import { UserContext } from "../Components/UserProvider";

function EnterWritingroom({history}) {
  const {rooms} = useContext(UserContext);
  let { id } = useParams();
  if (rooms.includes(id)==false) {
      history.push('/');
  }
  return (
      <WritingRoomPage id={id}/>
  )
};
export default EnterWritingroom;
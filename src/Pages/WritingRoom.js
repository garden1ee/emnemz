import React from "react";
import EnterWritingroom from "../Components/EnterWritingroom";
import UserProvider from "../Components/UserProvider";

function WritingRoom() {
  return (
    <UserProvider>
      <EnterWritingroom />
    </UserProvider>
  );
}
export default WritingRoom;
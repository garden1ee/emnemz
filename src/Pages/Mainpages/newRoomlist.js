
import React, {useEffect, useState} from 'react';
import {getRoomDocument, getRoomNum} from '../../firebase';

const RoomList = () => {
const [infos, setInfo] = useState([{title:"", profilePic:"", intro:"", genre:"", hashtag:[]}]);

  setInfo([{title:"", profilePic:"", intro:"", genre:"", hashtag:[]}]);
  useEffect(()=>{
    const getRoomInfo = async () => {
        const room_num = getRoomNum();
         //   const {info, characters} = roominfo;
         for(var i = 1; i <= room_num; i++){
            let room_info = await getRoomDocument(i);
            let info_list = [];
            if (room_info){
              let {info} = room_info;
              info_list.push(info);
            }
            return (
                <div>{info_list.map(room => (
                    <div>{room.title})</div>
                    ))}
                </div>
              );
          } 
      }
    })
  return (
      <getRoomInfo />
  )
}
export default RoomList;
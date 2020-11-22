import React, { useState } from "react";
import { generateRoomDocument } from "../firebase";

class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this. state = { title: '', profilePic: '' hashtag: '', intro: '', name: '', pic: '', characters: []};
  
    const [error, setError] = useState(null);
    const createRoomHandler = async (event, title, profilePic, hashtag, intro, characters) => {
      event.preventDefault();
      try{
        const {info} = {title, profilePic, hashtag, intro};
        const room = {info, characters};
        generateRoomDocument(room, {info, characters});
        alert('The form is submitted');
        history.push('/list');
      }
      catch(error){
        setError(`Error creating room`);
      }
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    onChangeHandler(event) {
      if (name === "Roomtitle") {
        this.setState({title: event.target.value});
      } else if (name === "RoomprofilePic") {
        this.setState({profilePic: event.target.value});
      } else if (name === "Roomhashtag") {
        this.setState({hashtag: event.target.value});
      } else if (name === "Roomintro") {
        this.setState({intro: event.target.value});
      } else if (name === "Charname") {
        this.setState({name: event.target.value});
      } else if (name === "Charpic") {
        this.setState({pic: event.target.value});
      }
    }
  const memberAddHandler = () => {
      const {character} = {name, pic}
      setCharacters([...characters, character]);
  }
  const memberRemove = (id) => {
      setCharacters(characters.splice(id,1));
  }
  return (
    <div>
      <h3>작성방 만들기</h3>
      <br/>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form name="createForm">
          <label htmlFor="Roomname">
            소설 이름 : 
          </label>
          <textarea
            name="Roomname"
            value={title}
            placeholder="E.g: 루피네 대모험"
            id="Roomname"
            className="Cr-formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="RoomprofilePic">
            대표사진 :
          </label>
          <textarea
            name="RoomprofilePic"
            value={profilePic}
            id="RoomprofilePic"
            className="Cr-formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
          <label htmlFor="Roomhashtag">
            해시태그 :
          </label>
          <textarea
            name="Roomhashtag"
            value={hashtag}
            placeholder="소설방을 잘 나타내는 키워드를 써주세요. 예시) #모험 #루피와친구들 #항해시작"
            id="Roomhashtag"
            className="Cr-formInput"
            onChange={event => onChangeHandler(event)}
          />
          <label htmlFor="Roomintro">
            소개글 :
          </label>
          <textarea
            name="Roomintro"
            value={intro}
            placeholder="간단한 소개글을 써주세요"
            id="Roomintro"
            className="Cr-formInput"
            onChange={event => onChangeHandler(event)}
          />
          <br/>
            <label htmlFor="Charname">
                캐릭터명
            </label>
            <input
                type="text"
                name="Charname"
                value={name}
                placeholder="E.g: 루피"
                id="Charname"
                className="Cr-formInput"
                onChange={event => onChangeHandler(event)}
            />
            <label htmlFor="RoomprofilePic">
                프로필 사진 :
            </label>
            <input
                type="text"
                name="Charpic"
                value={pic}
                id="Charpic"
                className="Cr-formInput"
                onChange={event => onChangeHandler(event)}
            />
            <button
              className="Cr-addBtn"
              onClick={() => {
                memberAddHandler();
            }}>
                추가
            </button>
          <label htmlFor="Charlist">
            목록 :
          </label>
          <ul>
          {characters.map(character => (
              <li key={character.name} message={character.pic} />
              ))}
          </ul>
          <button
            className="Cr-submitBtn"
            onClick={(event) => {
                createRoomHandler(event, title, profilePic, intro, characters);
            }}
          >
            제출
          </button>
          </form>
      </div>
    </div>
  );
};
export default CreateRoom;
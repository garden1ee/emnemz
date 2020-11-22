import React from "react";
import { getRoomNum, generateRoomDocument } from "../firebase";
/*NOT WORKING YET form과 character list 나누어놓기*/
class CreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', profilePic: '', hashtag: '', intro: '', name: '', pic: '', characters: []};
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.characterAddHandler = this.characterAddHandler.bind(this);
  }
    onChangeHandler(event) {
      const { name } = event.currentTarget;
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
    onSubmitHandler(event) {
      event.preventDefault();
        const {id} = getRoomNum()+1;
        const {title, profilePic, hashtag, intro, characters} = this.state;
        const {info} = {title, profilePic, hashtag, intro}
        const room = {id, info, characters};
        generateRoomDocument(room, {info, characters});
        alert('The form is submitted');
        this.context.history.push('/list');
    }
    characterAddHandler() {
      const {characters} = this.state;
      this.setState({
        characters: characters.concat({name: this.name, pic: this.pic})
      })
    }
    characterRemoveHandler(name) {
      const {characters} = this.state;
      this.setState({
        characters: characters.filter(character => character.name !== name)
      }) 
    }
    render() {
      return (
        <div>
      <h3>작성방 만들기</h3>
      <br/>
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="Roomname">
            소설 이름 : 
          </label>
          <textarea
            name="Roomname"
            value={this.state.title}
            placeholder="E.g: 루피네 대모험"
            id="Roomname"
            className="Cr-formInput"
            onChange={this.onChangeHandler}
          />
          <br/>
          <label htmlFor="RoomprofilePic">
            대표사진 :
          </label>
          <textarea
            name="RoomprofilePic"
            value={this.state.profilePic}
            id="RoomprofilePic"
            className="Cr-formInput"
            onChange={this.onChangeHandler}
          />
          <br/>
          <label htmlFor="Roomhashtag">
            해시태그 :
          </label>
          <textarea
            name="Roomhashtag"
            value={this.state.hashtag}
            placeholder="소설방을 잘 나타내는 키워드를 써주세요. 예시) #모험 #루피와친구들 #항해시작"
            id="Roomhashtag"
            className="Cr-formInput"
            onChange={this.onChangeHandler}
          />
          <label htmlFor="Roomintro">
            소개글 :
          </label>
          <textarea
            name="Roomintro"
            value={this.state.intro}
            placeholder="간단한 소개글을 써주세요"
            id="Roomintro"
            className="Cr-formInput"
            onChange={this.onChangeHandler}
          />
          <br/>
            <label htmlFor="Charname">
                캐릭터명
            </label>
            <textarea
                name="Charname"
                value={this.state.name}
                placeholder="E.g: 루피"
                id="Charname"
                className="Cr-formInput"
                onChange={this.onChangeHandler}
            />
            <label htmlFor="RoomprofilePic">
                프로필 사진 :
            </label>
            <textarea
                name="Charpic"
                value={this.state.pic}
                id="Charpic"
                className="Cr-formInput"
                onChange={this.onChangeHandler}
            />
            <button
              className="Cr-addBtn"
              onClick={this.onSubmitHandler}>
                추가
            </button>
          <label htmlFor="Charlist">
            목록 :
          </label>
          <ul>
          {this.state.characters.map(character => (
              <li key={character.name} message={character.pic} />
              ))}
          </ul>
          <input type="submit" value="Submit"
            className="Cr-submitBtn">
            제출
          </input>
          </form>
      </div>
    </div>
  )};
};
export default CreateRoom;
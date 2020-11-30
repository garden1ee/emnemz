import React, {useState, useEffect, useContext} from "react";
import ChatPage from "./ChatPage"
import { getRoomDocument, updateScript } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../style/WritingroomPage.css';
import NovelRoomInfo from './NovelRoomInfo';
import Vote from './Vote';
import { Link } from 'react-router-dom';

var script = "대사를 입력하세요. \n";

const WritingRoomPage = (props) => {
    const [info, setInfo] = useState({title:"", profilePic:"", intro:"", hashtag:[]});
    const [characters, setCharacters] = useState([{name:'',pic:'',user:''}]);
    const [mycharacter, setMycharacter] = useState({name:'',pic:''});
    const [input, setInput] = useState("");
    const { uid } = props.user;
    const room_id = props.roomid;

    const getRoominfo = async () => {
        const roominfo = await getRoomDocument(room_id)
        if (roominfo) {
        const {info, characters} = roominfo;
        setCharacters(characters);
        setInfo(info);
        };
    }
    setInput('');
    const onChangeHandler = event => setInput(event.target.value);

    const onSubmitHandler = async (event, input) => {
        event.preventDefault();
        const {name, pic} = mycharacter;

        await updateScript(room_id, {
          isScript: event.target.value,
          avatar: pic,
          character: name,
          message: input
        });
    }
    useEffect(()=>{
        getRoominfo();
        const char = characters.map(character=> {
            if(character.user===uid) {
                const {name, pic} = character;
                return {name, pic}
            }
        })
        setMycharacter(char);
    })
    
    return (
        <div className="writingroompage">
            <div className="row">
                <div className="col-11 writingroom-title">
                    <button className="WR-backtoMain"><Link to="/list" className="WR-link"><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
                    <h4 className="WR-title">{info.title}</h4>
                </div>
                <div className="col-1 WRdropdown-here">
                    <DropdownButton variant="secondary"size="lg" className='WRdropdownMenu' menuAlign="right"
                    title={<FontAwesomeIcon icon={faBars} />}>
                        <div>
                        <Dropdown.Item className="WRdropdownedMenu">참여자 목록</Dropdown.Item>
                        <NovelRoomInfo info={info}/>
                        <Dropdown.Item className="WRdropdownedMenu">친구 초대</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="row trytohandle">
                <div className="col-11 h-100 WR-MainArea">
                    <ChatPage roomid={props.roomid} />
                </div>
                <div className="col-1">
                    <ul className="WR-sidebar">
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faComments} /><p className="WR-small">토론방</p></a></li>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} /><p className="WR-small">투표하기</p></a></li>  
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p className="WR-small">출판하기</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WritingRoomPage;
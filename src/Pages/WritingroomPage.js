import React, {useState, useEffect, useContext} from "react";
import ChatPage from "./ChatPage"
import { getRoomDocument, updateScript } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../style/WritingroomPage.css';
import NovelRoomInfo from './NovelRoomInfo';
import ParticipantsInfo from './ParticipantsInfo';
import Vote from './Vote';
import { Link, useLocation } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DiscussionModal from './DiscussionModal';


var isDiscussion = false;

const openDiscussion = () => {

    isDiscussion = true;
}

const closeDiscussion = () => {
    isDiscussion = false;
}

const WritingRoomPage = (props) => {
    const location = useLocation();
    const [info, setInfo] = useState(location.state.info);
    const [characters, setCharacters] = useState(location.state.characters);
    const userChar = characters.find(c => c['user'] === props.user.uid);

    return (
        <div className="writingroompage">
            <div className="row">
                <div className="col-11 writingroom-title">
                    <button className="WR-backtoMain"><Link to="/mypage" className="WR-link"><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
                    <h4 className="WR-title">{info.title}</h4>
                </div>
                <div className="col-1 WRdropdown-here">
                    <DropdownButton variant="secondary"size="lg" className='WRdropdownMenu' menuAlign="right"
                    title={<FontAwesomeIcon icon={faBars} />}>
                        <div>
                        <ParticipantsInfo characters={characters}/>
                        <NovelRoomInfo info={info}/>
                        <Dropdown.Item className="WRdropdownedMenu">친구 초대</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="row trytohandle">
                <div className="col-11 h-100 Chatcontainer">
                    <ChatPage id={props.roomid} myCharName={userChar? userChar.name : "?"} myCharPic={userChar? userChar.pic : null} roomid={props.roomid} />
                </div>
                <div className="col-1">
                    <ul className="WR-sidebar">
                        
                        <li>
                            <a className="Wr-sidebar-comp" onClick={openDiscussion}>
                            <FontAwesomeIcon icon={faComments} /><p className="WR-small">토론방</p>
                            </a>
                        </li>
                        <Dialog open={isDiscussion}>
                        <DialogContent style={{width: 500, height:700}}>
                        <button type="button" class="btn btn-default" class="x_button"
                                onClick={closeDiscussion} class="right_align1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                        </button>
                        </DialogContent>
                         <DiscussionModal id={props.roomid}/>


                        </Dialog>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} /><p className="WR-small">투표하기</p></a></li>  
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p className="WR-small">출판하기</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WritingRoomPage;
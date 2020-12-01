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
import Publish from './Publish';
import { Link, useLocation } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DiscussionModal from './DiscussionModal';




const WritingRoomPage = (props) => {
    const location = useLocation();
    const [info, setInfo] = useState(location.state.info);
    const [characters, setCharacters] = useState(location.state.characters);
    const userChar = characters.find(c => c['user'] === props.user.uid);
    var [isDiscussion, setDiscussion] = useState(false);
    var [isVote, setVote] = useState(false);
    var [isPublish, setPublish] = useState(false);
    
    const openDiscussion = () => {

        setDiscussion(true);
    }

    const closeDiscussion = () => {
        setDiscussion(false);
    }

    const openVote = () => {
        setVote(true);
    }

    const closeVote = () => {
        setVote(false);
    }

    const openPublish = () => {
        setPublish(true);
    }

    const closePublish = () => {
        setPublish(false);
    }

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
                        <DialogContent style={{width: 500, height:700, fontWeight: "bold"}}>
                            토론방
                        <button type="button" className="x_button right_align1"
                                onClick={closeDiscussion}>
                                x
                        </button>
                        </DialogContent>
                         <DiscussionModal id={props.roomid}/>
                        </Dialog>
                        <li><a className="Wr-sidebar-comp" onClick={openVote}>
                            <FontAwesomeIcon icon={faVoteYea}/>
                            <p className="WR-small">
                                투표하기
                            </p>
                            </a>
                        </li>
                        <Dialog open={isVote}>
                        <DialogContent style={{width: 500, height:700}}>
                        <button type="button" class="btn btn-default" class="x_button"
                                onClick={closeVote} class="right_align1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                        </button>
                        </DialogContent>
                        
                          <Vote participant_num={characters.length} id={props.roomid} uid={props.user.uid}/>
                        
                        </Dialog>  
                        <li>
                            <a className="Wr-sidebar-comp" onClick={openPublish}> 
                            <FontAwesomeIcon icon={faBook} />
                            <p className="WR-small">출판하기</p>
                            </a>
                        </li>
                        <Dialog open={isPublish}>
                        <DialogContent style={{width: 500, height:700}}>
                     
                        </DialogContent>
                        
                          <Publish/>
                          <button type="button" class="btn btn-warning" onClick={openVote}>
                            네
                        </button>
                        <button type="button" class="btn btn-warning" onClick={closePublish}>
                            아니오
                        </button>
                        <button type="button" class="btn btn-default" class="x_button"
                                onClick={closePublish} class="right_align1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                        </button>
                        </Dialog>  
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WritingRoomPage;
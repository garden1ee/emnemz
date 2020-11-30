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




const WritingRoomPage = (props) => {
    const location = useLocation();
    const [info, setInfo] = useState(location.state.info);
    const [characters, setCharacters] = useState(location.state.characters);
    const userChar = characters.find(c => c['user'] === props.user.uid);
    var [isDiscussion, setDiscussion] = useState(false);

    const openDiscussion = () => {

        setDiscussion(true);
    }

    const closeDiscussion = () => {
        setDiscussion(false);
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
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} /><p className="WR-small">투표하기</p></a></li>  
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p className="WR-small">출판하기</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default WritingRoomPage;
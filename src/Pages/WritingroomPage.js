import React, {useState, useEffect} from "react";
import ChatPage from "./ChatPage"
import { getRoomDocument, getScript } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../style/WritingroomPage.css';
import nami_img from "./Images_character/nami.png";
import NovelRoomInfo from './NovelRoomInfo';
import { Route, Link } from 'react-router-dom';
import Vote from './Vote';
import {Component} from 'react';
import DiscussionModal from './DiscussionModal';



var script = "대사를 입력하세요. \n";

const WritingRoomPage = (props) => {
    const [info, setInfo] = useState({title:"", profilePic:"", intro:"", hashtag:[]});
    const [characters, setCharacters] = useState([]);
    const room_id = props.roomid;
    const getRoominfo = async () => {
        const roominfo = await getRoomDocument(room_id)
        if (roominfo) {
        const {info, characters} = roominfo;
        setCharacters(characters);
        setInfo(info);
        };
    }
    useEffect(getRoominfo);

    return (
        <div className="writingroompage">
            <div className="row">
                <div className="col-11 writingroom-title">
                    <button className="WR-backtoMain"><Link to="/list" className="WR-link"><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
                    <h4>{info.title}</h4>
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
                        <Vote/>
                        <DiscussionModal/>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p>출판하기</p></a></li>
                    </ul>
                </div>
            </div>
           
            <Route path="/Vote" component={Vote}/>
        </div>
    );
}
    

export default WritingRoomPage;

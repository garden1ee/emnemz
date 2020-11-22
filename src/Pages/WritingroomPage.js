import React from "react";
import ChatPage from "./ChatPage"
import { faArrowLeft, faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../style/WritingroomPage.css';
import nami_img from "./Images_character/nami.png";
import NovelRoomInfo from './NovelRoomInfo';
import { Route, Link } from 'react-router-dom';
import Vote from './Vote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Component} from 'react';
import DiscussionModal from './DiscussionModal';




class WritingRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            script: "ㅁㅁㅁ"
        }
    }

    changeScript(value){

        this.setState({
            script: value
        });
    }

    render(){
    return (
        <div className="writingroompage">
            <div className="row">
                <div className="col-11 writingroom-title">
                    <button className="WR-backtoMain"><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <h4>room title</h4>
                </div>
                <div className="col-1 WRdropdown-here">
                    <DropdownButton variant="secondary"size="lg" className='WRdropdownMenu' menuAlign="right"
                    title={<FontAwesomeIcon icon={faBars} />}>
                        <div>
                        <Dropdown.Item className="WRdropdownedMenu">참여자 목록</Dropdown.Item>
                        <NovelRoomInfo/>
                        <Dropdown.Item className="WRdropdownedMenu">친구 초대</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="row trytohandle">
                <div className="col-11 h-100 WR-MainArea">
                    <ChatPage/>
                </div>
                <div className="col-1">
                    <ul className="WR-sidebar">
                        <Vote/>
                        <DiscussionModal/>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p>출판하기</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-11 WR-scriptbar">
                    
                    <button id="characterSelect"><img id="userCharacterImg" src={nami_img} /></button>
                    <textarea placeholder="대사를 입력하세요. &#10;" 
                    className="scriptInput" value={this.state.script}/>
                    <div className="WR-submitBtn">
                        <button className="scriptBtn">대사</button><br/>
                        <button className="actionBtn">액션</button>
                        <button className="actionBtn" 
                        onClick={() => this.changeScript("ddd")}>수정</button>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
            <Route path="/Vote" component={Vote}/>
        </div>
    );
    }
}
export default WritingRoom;


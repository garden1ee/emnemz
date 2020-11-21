import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../style/WritingroomPage.css';
import nami_img from "./Images_character/nami.png";

const WritingRoom = () => {
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
                        <Dropdown.Item className="WRdropdownedMenu">소설 정보</Dropdown.Item>
                        <Dropdown.Item className="WRdropdownedMenu">친구 초대</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="row">
                <div className="col-11">
                    main area
                </div>
                <div className="col-1">
                    <ul className="WR-sidebar">
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faComments} /><p>토론방</p></a></li>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} /><p>투표</p></a></li>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p>출판하기</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-11 WR-messagebar">
                    <button id="characterSelect"><img id="userCharacterImg" src={nami_img} /></button>
                    <input type="text" placeholder="대사를 입력하세요" className="scriptInput" />
                    <button className="scriptBtn">대사</button>
                    <button className="actionBtn">액션</button>
                </div>
                <div className="col-1">
                </div>
            </div>
        </div>
    )
}
export default WritingRoom;
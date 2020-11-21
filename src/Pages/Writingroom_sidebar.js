import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import '../style/sidebar.css';

const WritingRoom = () => {
    return (
        <div className="writingroompage">
            <div className="row">
                <div className="col writingroom-title">
                    room title
                </div>
                <div className="col">
                    <DropdownButton className='dropdownMenu'>
                        <FontAwesomeIcon icon={faBars} />
                        <div className="dropdownedMenu">
                        <Dropdown.Item>참여자 목록</Dropdown.Item>
                        <Dropdown.Item>소설 정보</Dropdown.Item>
                        <Dropdown.Item>친구 초대</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    main area
                </div>
                <div className="col">
                    <ul className="WR-sidebar">
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faComments} />토론방</a></li>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} />투표</a></li>
                        <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} />출판하기</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    for message input
                </div>
                <div className="col">
                    no use
                </div>
            </div>
        </div>
    )
}
export default WritingRoom;
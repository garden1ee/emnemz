import React from 'react';

class PageHeader extends React.Component {

    render() {
        return (
            <div className="main header">
                <nav class="navbar">
                    <ui class="navbar_logo">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>Yu칼노리</button></li>
                    </ui>
                    <ui class="navbar_writing">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>소설 작성방</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>완결 작품방</button></li>
                    </ui>
                    <ui class="navbar_menu">
                        <li><button className="mypage-button" onClick={() => this.props.setPage("mypage")}>마이 페이지</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>알림</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>환경설정</button></li>
                        <li><button className="mypage-button" onClick={() => this.props.setPage("main")}>로그인</button></li>
                    </ui>
                </nav>
            </div>

        )
    }
}

export default PageHeader;

import React from 'react';


class PageHeader extends React.Component {

    render() {
        return (
          <div className="main header">
              <nav className="navbar">
                  <ui class="navbar_logo">
                      <li><button className="header-button" onClick={() => this.props.setPage("main")}>Yu칼노리</button></li>
                  </ui>
                  <ui class="navbar_writing">
                      <li><button className="header-button" onClick={() => this.props.setPage("main")}>소설 작성방</button></li>
                      <li><button className="header-button" onClick={() => this.props.setPage("finished")}>완결 작품방</button></li>
                  </ui>
                  <ui class="navbar_menu">
                      <li><button className="header-button" onClick={() => this.props.setPage("mypage")} style={{ color: "white" }}>마이 페이지</button></li>
                      <li><a href="" style={{ color: "white" }}>알림</a></li>
                      <li><a href="" style={{ color: "white" }}>환경설정</a></li>
                      <li><a href="" style={{ color: "white" }}>로그인</a></li>
                  </ui>
              </nav>
          </div >
        )
    }
}

export default PageHeader;

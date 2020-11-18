import React from 'react';
import PageHeader from './PageHeader.js';

const btnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 36,
  marginLeft: 30,
  marginTop: 10,
}

const stnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 24,
  marginLeft:30,
}
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 17,
  marginLeft:30,
  height: 29,
  width: 600,
  marginRight: 10,
  marginTop: 10,  
}

class MyPage extends React.Component {
    render() {
        return (
            <section className="MyPage">
                <div className="main header">
                    <nav class="navbar">
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
                <div className="test text">
                    <p>This page is mypage </p>
                </div>
                </section>
          )

    }
}


export default MyPage;

import React from 'react';
import PageHeader from './PageHeader.js';


class Main extends React.Component {
    render() {
        return (
            <section className="main">
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
                <div className="search bar">
                    <nav class="searchbar">
                        <div class="searchbar_input">
                            <input class="inputbar"></input>
                            <button> 검색</button>
                        </div>
                        <ui class="searchbar_char">
                            <text>해시태그:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">소설</option>
                                <option value="학생">판타지</option>
                                <option value="회사원" selected="selected">만화</option>
                                <option value="기타">드라마</option>
                            </select>&nbsp;&nbsp;&nbsp;
                  
          <text>정렬:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">최신순</option>
                                <option value="학생">인기순</option>
                                <option value="회사원" selected="selected">평점순</option>
                                <option value="기타">검색순</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ui>
                    </nav>
                    </div>
                <div className="test text">
                    <p>This page is mainpage </p>
                </div>
                <div class="row chatroom">
                        <div className="col-4 chatroom_col1">
                        <img src="https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg" alt="image not dispalyed" className="w-50" /> 
                        <p>OnePiece Chatroom</p>
                    </div>
                    <div className="col-4 chatroom_col2">
                        <img src="https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp" alt="image not dispalyed" className="w-50" />
                        <p>Naruto</p>
                    </div>
                    <div className="col-4 chatroom_col3">
                        <img src="https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" alt="image not dispalyed" className="w-50" />
                        <p>이태원클라쓰</p>
                    </div>
                </div>
            </section>

          )

    }
}


export default Main;

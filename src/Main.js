import React from 'react';
import PageHeader from './PageHeader.js';
import Customer from './Customer.js'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const customer=[
  {
  'id':1,
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'원피스 웹소설 드가자',
  'gender':'모집입원: 2/5명',
  'birthday':'#원피스 짱짱맨 #루피사기',
},
{
  'id':2,
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'gender':'모집입원: 1/5명',
  'birthday':"#나루토멋져#사스케좋아",
},
{
  'id':3,
  'image':"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  'name':'이태원 클라쓰 관련 소설 쓰실분?',
  'gender':'모집인원 2/7명',
  'birthday':'#클라스가다르지 #배우팬오세요',
}]

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
                                <option value="fantagy">판타지</option>
                                <option value="cartoon" selected="selected">만화</option>
                                <option value="drama">드라마</option>
                            </select>&nbsp;&nbsp;&nbsp;

          <text>정렬:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="most">최신순</option>
                                <option value="popular">인기순</option>
                                <option value="" selected="selected">평점순</option>
                                <option value="">검색순</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ui>
                    </nav>
                    </div>
                <div>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>최신순</TableCell>
                        <TableCell>이미지</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>관련 검색어</TableCell>
                        <TableCell>모집인원</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        customer.map(c=>{
                          return(
                            <Customer
                              id={c.id}
                              image={c.image}
                              name={c.name}
                              birthday={c.birthday}
                              gender={c.gender}/>
                          )
                        })
                      }
                    </TableBody>
                  </Table>
                </div>
            </section>

          )

    }
}


export default Main;

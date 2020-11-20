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
  'name':'루피의 모험',
  'gender':'5명이서 열심히 썻습니다 부족한 글이지만 이쁘게 봐주시면 합니다 ㅎㅎ',
  'birthday':'4.9점/5점',
},
{
  'id':2,
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토: 호카게가 된 남자',
  'gender':'나루토를 진짜 재밋게 봤는데 내 손으로 새로운 나루토를 써서 정말 재밌었어요 ㅎㅎ 정말 재밌게 놀았어요',
  'birthday':"4.77점/5점",
},
{
  'id':3,
  'image':"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  'name':'사이다 클라쓰',
  'gender':'이렇게 됐다면 주인공이 어떻게 행동했을까를 바탕으로 열심히 썻습니다 같이 써준 분들 다 감사합니다',
  'birthday':'4.72점/5점',
}]



class FinishedWork extends React.Component {
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
                                <option value="">판타지</option>
                                <option value="" selected="selected">만화</option>
                                <option value="">드라마</option>
                           </select>&nbsp;&nbsp;&nbsp;
          <text>정렬:&nbsp;&nbsp;&nbsp;</text>
                            <select name="job">
                                <option value="">최신순</option>
                                <option value="">인기순</option>
                                <option value="" selected="selected">평점순</option>
                                <option value="">검색수</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ui>
                    </nav>
                    </div>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>인기순</TableCell>
                      <TableCell>이미지</TableCell>
                      <TableCell>제목</TableCell>
                      <TableCell> 평점</TableCell>
                      <TableCell>작가의말</TableCell>
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
            </section>


          )

    }
}


export default FinishedWork;

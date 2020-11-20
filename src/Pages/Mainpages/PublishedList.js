import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import PublishInfoModal from './PublishInfoModal.js';

const customer=[
  {
  'id':1,
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'루피의 모험',
  'gender':'저희는 중학생인데 학교 친구들과 같이 써보았어요. 미숙한 솜씨지만 재밌게 봐주었으면 좋겠습니다. 잘 읽어주세요 ㅎ',
  'birthday':'#원피스 #루피',
  'score':'4.89/5점',
},
{
  'id':2,
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'gender':'나루토가 호카게까지의 길이 조금 더 쉬웠으면 어떻게 됐을까? 사륜안을 가졌으면 더 쎗을까? 등의 생각들로 모여 적은 글입니다.',
  'birthday':"#나루토 #사스케",
  'score':'4.89/5점',
},
{
  'id':3,
  'image':"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  'name':'이태원 클라쓰 if 소설',
  'gender':'이태원 클라쓰의 배우들을 너무 좋아해서 팬픽을 써보았습니다 5명의 인원으로 썻구요 부디 재미있게 보았으면 합니다 ㅎㅎ',
  'birthday':'#이태원클라쓰 #배우 #드라마',
  'score':'4.89/5점',
}]
const stly={
  marginLeft:30
}
const searchbarstyle={
    color: "black",
    background: "#C4C4C4",
    fontSize: 17,
    marginLeft:30,
    height: 29,
    width: 600,
    marginRight: 10,
}
const PublishedList =() => {
    return(
        <div>
          <h1/>
          <input style={searchbarstyle}/>
          <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
          <ui class="searchbar_char">
            <text style={stly}>해시태그:&nbsp;&nbsp;&nbsp;</text>
            <select name="job">
              <option value="">소설</option>
              <option value="fantagy">판타지</option>
              <option value="cartoon" selected="selected">만화</option>
              <option value="drama">드라마</option>
            </select>&nbsp;&nbsp;&nbsp;
            <text style={stly}>정렬:&nbsp;&nbsp;&nbsp;</text>
              <select name="job">
                <option value="most">최신순</option>
                <option value="popular">인기순</option>
                <option value="" selected="selected">평점순</option>
                <option value="">검색순</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ui>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>랭킹순</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>연관 검색어</TableCell>
                  <TableCell>작가의 말</TableCell>
                  <TableCell>평점</TableCell>
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
                        gender={c.gender}
                        score={c.score}/>
                    )
                  })
                }
              </TableBody>
            </Table>
        </div>
    );
};
class Customer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            setModalIsOpen: false
        };
    }
    render() {
        let setModalClose = () => this.setState({ setModalIsOpen: false });
        return (
            <TableRow>
                <TableCell><button onClick={() => this.setState({ setModalIsOpen: true })}>{this.props.id}</button>
                    <PublishInfoModal show={this.state.setModalIsOpen} onHide={setModalClose} /></TableCell>
        <TableCell><img src= {this.props.image} width="200" height="200" alt="profile"/></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.score}</TableCell>
      </TableRow>
    )
  }
}
class CustomerProfile extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.image} alt="profile"/>
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}
class CustomerInfo extends React.Component{
  render(){
    return(
      <div>
        <a href="">{this.props.name}</a>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.score}</p>
      </div>
    )
  }
}
export default PublishedList;

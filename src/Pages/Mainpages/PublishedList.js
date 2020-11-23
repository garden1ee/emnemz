import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import PublishInfoModal from './Modals/PublishInfoModal.js';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  grid:{
    width:'100%',
    fontSize:'20px',
    margin:'0px',
    justifyContent: "center",
  },
  paper: {
    border:"0",
    padding: theme.spacing(2),
    color: "white",
    background: "#263343",
    height:"60px",
  },
  paper1: {
    padding: theme.spacing(2),
    color: "black",
    background: "white",
    border:0,
  },

}));
const customer1=[
    {
        'number': "1",
  'id':"소설보기",
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'루피의 모험',
  'birthday':'#원피스 #루피',
  'score':'4.89/5점',
},
    {
    'number': "2",
  'id':"소설보기",
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'birthday':"#나루토 #사스케",
  'score':'4.89/5점',
}]

const customer=[
    {
        'number': "1",
  'id':"소설보기",
  'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
  'name':'루피의 모험',
  'birthday':'#원피스 #루피',
  'score':'4.89/5점',
},
    {
    'number': "2",
  'id':"소설보기",
  'image':"https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
  'name':'나루토 성장시키기 방입니다',
  'birthday':"#나루토 #사스케",
  'score':'4.89/5점',
},
    {
    'number': "3",
  'id':"소설보기",
  'image':"https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
  'name':'이태원 클라쓰 if 소설',
  'birthday':'#이태원클라쓰 #배우 #드라마',
  'score':'4.89/5점',
}]
const stly={
  textAlign: 'center',
}

const searchbarstyle={
    color: "black",
    background: "#C4C4C4",
    fontSize: 17,
    marginLeft:0,
    height: 29,
    width: "auto",
    marginRight: 10,
}
const PublishedList =() => {

    const classes=useStyles();
    return(
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={6}>
            <input style={searchbarstyle}/>
            <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
          </Grid>
          <Grid item xs={6}>
            <ui class="searchbar_char">
              <text style={stly}>해시태그:</text>
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
          </Grid>
          <Grid item xs={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
              </Grid>
              <Paper className={classes.paper1}>
                {
                  customer.map(c=>{
                    return(
                        <PublishInfoModal c={c}/>
                    )
                  })
                }
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
              </Grid>

              <Paper className={classes.paper1}>
                {
                    customer1.map(c=>{
                      return(
                          <PublishInfoModal c={c} />
                      )
                    })
                  }
                </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid item xs={12}>
              <Grid item xs={12}>
              </Grid>
              <Paper className={classes.paper1}>
                {
                  customer.map(c=>{
                    return(
                        <PublishInfoModal c={c} />
                    )
                  })
                }
              </Paper>
            </Grid>
          </Grid>
        </Grid>

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
        <h2/><img src= {this.props.image} width="200" height="200" alt="profile"/>
        <h2/><text style={stly}>{this.props.name}</text>
        <h2/><text style={stly}>{this.props.birthday}</text>
        <h2/><text style={stly}>{this.props.score}</text>
        <h2/><button style={stly} onClick={() => this.setState({ setModalIsOpen: true })}>{this.props.id}</button>
            <PublishInfoModal show={this.state.setModalIsOpen} onHide={setModalClose} />

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
        <a marginLeft={3} href="">{this.props.name}</a>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.score}</p>
      </div>
    )
  }
}
export default PublishedList;

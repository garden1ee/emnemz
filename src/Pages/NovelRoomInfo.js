import {Component} from 'react';
import {Dropdown} from 'react-bootstrap';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { lightBlue } from '@material-ui/core/colors';

class NovelRoomInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            roomInfo:
            {
            'id':1,
            'image':'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
            'name':'루피의 모험',
            'genre': '모험, 판타지, 팬소설',
            'hash_tag':'#원피스 #루피',
            'novel_summary':'주인공 루피와 조로와 나미가 함께 모험을 떠났는데 그때 만난 적 아론!!',
            'author_saying': '저희 즐겁게 잘 썼습니다.'
            
             
          }
        }
    }

    Open = () =>{
    

        this.setState({
          isOpen: true,
        });
      }
  

  
      Close = () => {
        this.setState({
          isOpen: false
        });
      }

      render(){
          return(
    <div>
        <Dropdown.Item className="WRdropdownedMenu"
        onClick={this.Open}>
            소설 정보
        </Dropdown.Item>
        <Dialog open={this.state.isOpen} 
        >    
                
            <div>
                <DialogContent style={{width: 1500}}>
                    <TableRow>
                        <img src= {this.state.roomInfo.image} width="200" height="200" alt="profile"/>
                 
                         <br></br>
                        <li>
                            <TableRow> 작품명:   {this.state.roomInfo.name} </TableRow>
                            
                            <TableRow>장르:  {this.state.roomInfo.genre}</TableRow>
                            <br></br>
                            <TableRow> 해시 태그:  {this.state.roomInfo.hash_tag}</TableRow>
                            <br></br>
                            <TableRow> 작품 줄거리: {this.state.roomInfo.novel_summary}</TableRow>
                        </li>
            
                    </TableRow>
                    <TableRow>
                        <TableCell style={{width:500}}> 작가의 말: {this.state.roomInfo.author_saying}</TableCell>
            
                    </TableRow>
                </DialogContent>

                <DialogContent>

                <button onClick={this.Close} class="btn btn-primary">
                    뒤로가기
                </button>
                </DialogContent>

     
            </div>

        </Dialog>
    </div>);
      }
}

export default NovelRoomInfo;


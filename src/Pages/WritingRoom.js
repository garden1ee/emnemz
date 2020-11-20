import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import React, {Component} from 'react';
import  '../../src/style/WritingRoom.css';
import { Link, Route } from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap';

class WritingRoom extends Component{
  constructor(props){
    super(props);
    this.state={
      open: false
    };
  }
    hadnleClickOpen = () =>{
      this.setState({
        open: true
      });
    }

    publish = () => {
      // 채팅한거 모아서 만드는 과정
      // 만든 컨텐츠를 완결 작품들로 정보 보내기
      
      this.setState({
        open: false 
      });
    }
    handleClose = () =>{
      this.setState({
        open: false
      });
    }
    render() {

      const { classes } = this.props;

      return(  <div class="all">
            
      <nav class="navbar navbar-inverse">
          <div class="container-fluid">
              <div class="navbar-header">
              <a class="navbar-brand" href="#">novel room name</a>
              </div>
        
              <DropdownButton id="dropdown-basic-button" title="" class="nav_loc" 
             
       onSelcet={(eventKey) => console.log(eventKey)}>
           <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
         
           <div>
       <Dropdown.Item eventKey="participant_lists">
           <a href="">참여자 목록</a></Dropdown.Item>
       <Dropdown.Item eventKey="novel_info">소설 정보</Dropdown.Item>
      < Dropdown.Item eventKey="communication_display">대화창</Dropdown.Item>
      </div>
      </DropdownButton>
           
              
              
          </div>
      </nav>

 
      <div class="column">

      <button type="button" class="btn btn-default" class="right_align1"> 
      <Link to="/DiscussionRoom">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
       </svg>
       </Link>
      </button>

      <button type="button" class="btn btn-default" class="right_align2">
      <Link to="">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
        </Link>
      </button>
      <button type="button" class="btn btn-default" class="right_align3">
          <div to="">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
       </svg>
       </div>
       </button>
       <div>
        
       
          <div>
          
          <button variant="contained" class="btn btn-default" class="right_align4" onClick={this.hadnleClickOpen}>
          출판
             
        </button>
        <Dialog open={this.state.open} onClick={this.handleClose}>
        정말 출판하시겠습니까?
        <DialogContent>
        <button variant="contained" class="btn btn-default" onClick={this.publish}>
            네
        </button>
        <button variant="contained" class="btn btn-default" onClick={this.hadnleClose}>
          아니오
        </button>
        </DialogContent>
        </Dialog>
        
       </div>
     </div>
      </div>
   
      
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
   <script type="text/javascript" src="Scripts/boostrap.min.js"></script>
   <script type="text/javascript" src="Scripts/jquery-2.1.1.min.js"></script>
   <script type="text/javascript" src="js/bootstrap/bootstrap-dropdown.js"></script>  
  
  <link href="css/boostrap/css" rel="stylesheet"></link>
   </div>
       
      );
    }
}

export default WritingRoom;

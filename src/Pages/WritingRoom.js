import React from 'react';
import { Link, Route } from 'react-router-dom';
import  '../../src/style/WritingRoom.css';



const WritingRoom =() => {
    return(
        
        <div class="all">
            
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="#">novel room name</a>
                </div>
             
                <div class="menu">
               <button type="button" class="btn btn-default" class="right_align" data-toggle="dropdown" aria-haspopup="true">

                <span class="glyphicon glyphicon-menu-hamburger"></span>
                </button>
               <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    
                    참여자 목록
                    </a>
                    <a class="dropdown-item" href="#">
                    소설 정보
                    </a>
                    <a class="dropdown-item" href="#">
                    대화창 
                    </a>
                </div>
                </div>
                
            </div>
        </nav>

   
        <div class="right_align">

        <button type="button" class="btn btn-default" class="vertical_icon">
        <Link to="/DiscussionRoom">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
         </svg>
         </Link>
        </button>

        <button type="button" class="btn btn-default" class="vertical_icon">
        <Link to="">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
          </Link>
        </button>
        <button type="button" class="btn btn-default" class="vertical_icon">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
         </svg>
         </button>
         <div class="dropdown">
         <a class="dropdown-toggle btn" data-toggle="dropdown" href="#" >Dropdown trigger</a>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
      <li>Item One</li>
      <li>Item Two</li>
           </ul>
      </div>
        </div>
        
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
     <script type="text/javascript" src="Scripts/boostrap.min.js"></script>
     <script type="text/javascript" src="Scripts/jquery-2.1.1.min.js"></script>
     <script type="text/javascript" src="js/bootstrap/bootstrap-dropdown.js"></script>  
    
    <link href="css/boostrap/css" rel="stylesheet"></link>
    
    </div>
    );
};

export default WritingRoom;
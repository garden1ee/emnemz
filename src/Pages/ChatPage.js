import React, {Component, useContext } from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import { getRoomDocument, getScript, updateScript } from "../firebase";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
//import ChatMessage from "./ChatMessage";
import { MDBCard, MDBCardBody} from "mdbreact";
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';
import '../style/WritingroomPage.css';
import TableCell from '@material-ui/core/TableCell';
import { UserContext } from "../Components/UserProvider";

class ChatPage extends Component {
    constructor(props) {
    super(props);

    this.ChatMessage = ({ message: { name, avatar, when, message, isScript } }) => 
  <div>
    <div>
{(isScript  
    ? <li className="chat-message  d-flex justify-content-between mb-4">
  
  <TableRow>
    <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    
    <MDBCard style={{borderRadius: "20%"}}>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{name}</strong>
         
        </div>
        <hr />
     
        <p className="mb-0">{message}  </p>
       
      </MDBCardBody>
    </MDBCard>
    <small className="pull-right text-muted">
            <i className="far fa-clock"/> {when}
          </small>

<hr></hr>
          {(this.state.user_character.name === name ?

<button class="btn btn-primary" style={{width:70, height:30, verticalAlign: "center"}} onClick={() => this.changeText(message)}>편집</button>
: 
 <p></p>
)}
   
   </TableRow>
  </li>
  
  : <li className="chat-message  d-flex justify-content-between mb-4">
     <TableRow>
  <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />

  <MDBCard>
    <TableRow>
    <MDBCardBody>
      <div>
        <strong className="primary-font">{name}</strong>
       
      </div>
      <hr />
   
      <p className="mb-0">{message}  </p>
  
    </MDBCardBody>
  
    </TableRow>
  </MDBCard>

  <small className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>

   
   {(this.state.user_character.name=== name ?

  
<button class="btn btn-primary" onClick={() => this.changeText(message)}>편집</button>

: 
<p></p>
)}
 
  

        </TableRow>
   
</li>

)}

</div>


</div>
    this.state = {
      scripts:[],
      user_id: "girlera7",
      text_input: "",
      room_id: -1,
      user_script: "",
      character_name: "경우",
      user_character: {name: "자림", }};

    } 
    
     changeText(target){
       if(this.state.text_input != target){
        this.setState({
          text_input: target,
        }); 
       }
   
    } 
    send_script = () => { 
      // this.state.user_script
      var new_data = { character: this.state.user_character.name
        , avatar: this.state.user_character.pic, 
        message: this.state.user_script, isScript: true}

      const new_scripts = updateScript(this.state.room_id, new_data);
     // this.setState({scripts: new_scripts});
    } 

    send_action = () => {
      var new_data = { character: this.state.user_character.name
        , avatar: this.state.user_character.pic, 
        message: this.state.user_script, isScript: false}

      const new_scripts = updateScript(this.state.room_id, new_data);
    }

    componentDidMount = async () => {
      const room_id = this.props.roomid;
      const characters = this.props.characters;
      // name, pic, url, user, uid
       this.state.user_id  = characters.uid;

      characters.map((character) =>
        {
          return(character.uid === this.state.user_id ?
           
            this.state.user_character = character :
            false);
        }
          
      )

      


      

       this.setState({
          room_id: room_id
       });

      const scriptDB = await getScript(room_id);

      if (scriptDB) {
        const {scripts} = scriptDB;
        
        this.setState({scripts: scripts});

      }
   
    };
    handleChange = (e) =>{
      this.setState({
        user_script: e.target.value
      })
    }
    render() {
    return (
      <div className="row trytohandle">
    
      <div className="col-11 h-100 WR-MainArea">
            
                <div>
              <MDBCol md="6" xl="8">
                <MDBRow>
                  <MDBListGroup>
                    {this.state.scripts.map(message => (
                    <this.ChatMessage message={message} />
                    ))}
                  </MDBListGroup>
                </MDBRow>
              </MDBCol>   
          </div>
        </div>
           
        <div className="col-11 WR-scriptbar" style={{bottom: 0}}>
            
            <button id="characterSelect">
              <img id="userCharacterImg" src={this.state.user_character} />
            </button>
       
            <input placeholder="대사를 입력하세요." defaultValue={this.state.text_input} 
           
            onChange={this.handleChange}/>
       
            <div className="WR-submitBtn">
                <button className="scriptBtn" className="btn btn-default" 
                style={{width:80, height:30, textAlign: "center"}} 
                onClick={() => this.send_script()}>대사</button>
                <button className="actionBtn" className="btn btn-default" 
                style={{width:80, height:30, textAlign: "center"}}
                onClick={() => this.send_action()}>액션</button>
            </div>
           
        </div>
      
        <div className="col-1">
            <ul className="WR-sidebar">
                <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faComments} /><p>토론방</p></a></li>
                <li>
               
                        
                    <a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} />
                     <p> 
                       
                    </p>
                     </a>
                    투표하기
                </li>
                <li><a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faBook} /><p>출판하기</p></a></li>
            </ul>
        </div>
    
       
    </div>
   
    )};
  }
    
   
  


    
    export default ChatPage;
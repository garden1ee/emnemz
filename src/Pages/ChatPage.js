import React, {Component} from 'react';
import { MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import { getRoomDocument, getScript } from "../firebase";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
//import ChatMessage from "./ChatMessage";
import { MDBCard, MDBCardBody} from "mdbreact";
import TableRow from '@material-ui/core/TableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComments, faVoteYea, faBook } from '@fortawesome/free-solid-svg-icons';

class ChatPage extends Component {
    constructor(props) {
    super(props);

    this.ChatMessage = ({ message: { character, avatar, when, message, isScript } }) => 
  <div>
    <div>
{(isScript  
    ? <li className="chat-message  d-flex justify-content-between mb-4">
  
    <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    
    <MDBCard style={{borderRadius: "20%"}}>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{character}</strong>
         
        </div>
        <hr />
     
        <p className="mb-0">{message}  </p>
       
      </MDBCardBody>
    </MDBCard>
    <small className="pull-right text-muted">
            <i className="far fa-clock"/> {when}
          </small>
          {(this.state.user === character ?

<button class="btn btn-primary" style={{width:70, height:30, verticalAlign: "center"}} onClick={() => this.changeText(message)}>편집</button>
: 
 <p></p>
)}
   
   
  </li>
  
  : <li className="chat-message  d-flex justify-content-between mb-4">
     <TableRow>
  <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />

  <MDBCard>
    <MDBCardBody>
      <div>
        <strong className="primary-font">{character}</strong>
       
      </div>
      <hr />
   
      <p className="mb-0">{message}  </p>
     
    </MDBCardBody>

  </MDBCard>

 {(this.state.user === character ?

<li>
  <br></br>
  <br></br>
  <button class="btn btn-primary" onClick={() => this.changeText(message)}>편집</button>
</li>
: 
 <p></p>
)}
   
 
  
  <small className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>
        </TableRow>
   
</li>

)}

</div>


</div>
    this.state = {
      scripts:[],
      user: "경우",
      text_input: ""};
    } 
    
     changeText(target){
       if(this.state.text_input != target){
        this.setState({
          text_input: target,
        });
       }
   
    } 
    componentDidMount = async () => {
      const room_id = this.props.roomid;
      const scriptDB = await getScript(room_id);
      if (scriptDB) {
        const {scripts} = scriptDB;
        this.setState({scripts: scripts});
      }
    };
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
            
            <button id="characterSelect"><img id="userCharacterImg" src={nami_img} /></button>
            <textarea placeholder="대사를 입력하세요." className="scriptInput" defaultValue={this.state.text_input}/>
            <div className="WR-submitBtn">
                <button className="scriptBtn">대사</button><br/>
                <button className="actionBtn">액션</button>
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
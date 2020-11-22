import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup} from "mdbreact";
import { getRoomDocument, getScript } from "../firebase";
import aron_img from "../Pages/Images_character/aron.png";
import ruffi_img from "../Pages/Images_character/ruffi.png";
import nami_img from "../Pages/Images_character/nami.png";
import TableRow from '@material-ui/core/TableRow';
import '../style/ChatPage.css';


/*
const messages =  [
  {
  author: "루피",
  avatar: ruffi_img,
  message: "너 정말 나미를 죽인거냐",
  when: "Just now",
  seen: false,
  active: true,
  isScript: true
  },
    {
        author: "나미",
        avatar: nami_img,
        message: "아론 거기서",
        when: "Just now",
        seen: false,
        active: true,
        isScript: true
        }
];
*/
class ChatPage extends Component {
    constructor(props) {
    super(props);

    const ChatMessage = ({ message: { character, avatar, when, message, isScript } }) => 
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
            <i className="far fa-clock"/> {when.seconds}
          </small>
          {(this.state.user === character ?

<button class="btn btn-primary" style={{width:70, height:30, verticalAlign: "center"}}>편집</button>
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

 {(this.state.my_id === character ?

<li>
  <br></br>
  <br></br>
  <button class="btn btn-primary" onclick={this.change_user_text()}>편집</button>
</li>
: 
 <p></p>
)}
   
 
  
  <small className="pull-right text-muted">
          <i className="far fa-clock"/> {when.seconds}
        </small>
        </TableRow>
   
</li>)}



</div>
</div> 

    this.state = {
      scripts:[],
     mytext: "original",
     my_id: "나미"
    };


  }

    componentDidMount = async () => {
      const room_id = this.props.roomid;
      const scriptDB = await getScript(room_id);
      if (scriptDB){
        const {scripts} = scriptDB;
        this.setState({scripts: scripts});
      }
    }

    
    change_user_text = (value) => {

      this.setState({my_text: value});
    }

    render(){
      return (
        <div>
          <div className="col-125 h-100 WR-MainArea">
               <MDBCol md="10" xl="20">
              <MDBRow>
                <MDBListGroup>
  
                  {this.state.scripts.map(message => (
                       <ChatMessage message={message} />
                    
            
                  
                ))}
             
                       
  
                      </MDBListGroup>
                  )
                 
  
                    </MDBRow>
                    </MDBCol>
        
      
  
                  
                    <div className="row" style={{left: 10}}>
                  <div className="col-11 WR-scriptbar">
                      
                      <button id="characterSelect"><img id="userCharacterImg" src={nami_img} /></button>
                 
                      <textarea placeholder="대사를 입력하세요. &#10;"
                      defaultValue={this.state.my_text}
                      className="scriptInput" />
  
                
                      <div className="WR-submitBtn">
                          <button className="scriptBtn">대사</button><br/>
                          <button className="actionBtn">액션</button>
                          
                      </div>
                    
  
                  </div>
                  <div className="col-1">
                      </div>
                </div>
              
                </div>
                  </div>
      
          );
        }
  }
    /*render(){
    return (
      <div>
        <div className="col-125 h-100 WR-MainArea">
             <MDBCol md="10" xl="20">
            <MDBRow>
              <MDBListGroup>

                {this.state.scripts.map(message => (

                <ChatMessage message={message} />
                
              ))}
              {messages.map(message => (
                  message.author ===  this.state.user 
                  ?  <button  class="btn btn-primary" onClick= {() => this.change_user_text(message.message)}>
                      편집 
                     </button> : message.message = message.message
              ))}
                     

                    </MDBListGroup>
                )
               

                  </MDBRow>
                  </MDBCol>
      
    

                
                  <div className="row" style={{left: 10}}>
                <div className="col-11 WR-scriptbar">
                    
                    <button id="characterSelect"><img id="userCharacterImg" src={nami_img} /></button>
               
                    <textarea placeholder="대사를 입력하세요. &#10;"
                    defaultValue={this.state.my_text}
                    className="scriptInput" />

              
                    <div className="WR-submitBtn">
                        <button className="scriptBtn">대사</button><br/>
                        <button className="actionBtn">액션</button>
                        
                    </div>
                  

                </div>
                <div className="col-1">
                    </div>
              </div>
            
              </div>
                </div>
    
        );
      }*/
    
    
   

    

     
export default ChatPage;
   
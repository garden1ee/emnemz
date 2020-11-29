import '../style/ChatMessage.css'

var user = "나미";

function edit(){
  var edit_content = ChatMessage.mesage;
  
  
}
const ChatMessage = ({ message: { character, avatar, when, message, isScript } }) =>  
  <div>
    <div>
      {isScript ?
    <li className="chat-message">
    <div className="chat-profilebox"><img src={avatar||'https://i.ibb.co/ChncsT7/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    <p>{character}</p></div>
      <div className="chat-scriptbox"> {message} {user === character ? <button className="btn btn-primary btn-sm" 
                                                    style={{width:70, height:30, verticalAlign: "center"}}>편집</button>:<div/>}
      </div>
      <small hidden className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>                                    
        <hr /></li>
      :
    <li className="chat-message">
      <div>
       <div className="chat-actionbox">{character}, {message} {user === character ? <button className="btn btn-primary btn-sm" 
                                                    style={{width:70, height:30, verticalAlign: "center"}}>편집</button>:<div/>}
      </div>
      <small hidden className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>
      </div>
    </li>  
    }
  </div>


</div>

export default ChatMessage;
import '../style/ChatMessage.css'
import { auth } from "../firebase";


function ChatMessage(props) {
  const { text, createdAt, isScript, character, uid, photoURL, id } = props.message; 
  return (
  <div>
    <div>
      {isScript ?
    <li className="chat-message">
    <div className="chat-profilebox"><img src={photoURL||'https://i.ibb.co/ChncsT7/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    <p>{character}</p></div>
      <div className="chat-scriptbox"> {text} 
      </div> {uid === auth.currentUser.uid ?   <button className="btn btn-primary btn-sm editBtn" 
                                                    style={{width:50, height:30, verticalAlign: "center"}} onClick={()=>{props.onEdit(text,id)}}>편집</button>:<div/>}
      <small hidden className="pull-right text-muted">
          <i className="far fa-clock"/> {createdAt && createdAt.seconds}
        </small>                                    
        <hr /></li>
      :
    <li className="chat-message">
      <div>
       <div className="chat-actionbox">{character}, {text} {uid === auth.currentUser.uid ? <button className="btn btn-primary btn-sm editBtn" 
                                                    style={{width:50, height:30, verticalAlign: "center"}} onClick={()=>{props.onEdit(text,id)}}>편집</button>:<div/>}
      </div>
      <small hidden className="pull-right text-muted">
          <i className="far fa-clock"/> {createdAt && createdAt.seconds}
        </small>
      </div>
    </li>  
    }
  </div>


</div>
  )
}
export default ChatMessage;
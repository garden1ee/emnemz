import { MDBCard, MDBCardBody} from "mdbreact";

const ChatMessage = ({ message: { author, avatar, when, message, isScript } }) => 
  <div>
{(isScript  
    ? <li className="chat-message  d-flex justify-content-between mb-4">
    
    <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
    
    <MDBCard style={{borderRadius: "20%"}}>
      <MDBCardBody>
        <div>
          <strong className="primary-font">{author}</strong>
         
        </div>
        <hr />
     
        <p className="mb-0">{message}  </p>
       
      </MDBCardBody>
    </MDBCard>
    <small className="pull-right text-muted">
            <i className="far fa-clock"/> {when}
          </small>
  </li>
  
  : <li className="chat-message  d-flex justify-content-between mb-4">
    
  <img src={avatar} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
  
  <MDBCard>
    <MDBCardBody>
      <div>
        <strong className="primary-font">{author}</strong>
       
      </div>
      <hr />
   
      <p className="mb-0">{message}  </p>
     
    </MDBCardBody>
  </MDBCard>
  <small className="pull-right text-muted">
          <i className="far fa-clock"/> {when}
        </small>
</li>

)}
</div>

export default ChatMessage;
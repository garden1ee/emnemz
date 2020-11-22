import { MDBCard, MDBCardBody} from "mdbreact";
import TableRow from '@material-ui/core/TableRow';


var user = "나미";

function edit(){
  var edit_content = ChatMessage.mesage;
  
  
}
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
          {(user === character ?

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

 {(user === character ?

<li>
  <br></br>
  <br></br>
  <button class="btn btn-primary" onclick={edit()}>편집</button>
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

export default ChatMessage;
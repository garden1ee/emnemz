import {useRef, useState} from 'react';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import {firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

function Vote(props){

 
       
    const [agree_num, setAgreeNum] = useState(0);
    const [disagree_num, setDisAgreeNum] = useState(0);
    const [isCompleted, setCompleted] = useState(false);
    const [participant_num, setParticipantNum] = useState(props.participant_num);

    const dummy = useRef();
    const messagesRef = firestore.collection(`scripts_${props.id}`);
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    var value = "";


    var [contents, setContents] = useState(value);

    const voting = (isPositive) =>{
    
        if(isPositive){
            setAgreeNum(agree_num + 1);
               
            if(agree_num === participant_num - 1){

                setCompleted(true);
            }
        }
        else{
            setDisAgreeNum(disagree_num + 1);
        }
       
        

    }
    
  

    
    

        return(
      <div>
          <TableRow>
              출판 투표에 동의하시겠습니까?
          </TableRow>
          <TableRow>
            <button type="button" class="btn btn-warning" onClick={() => voting(true)}>
                네
            </button>
            <button type="button" class="btn btn-warning" onClick={() => voting(false)}>
                아니오
            </button>
          </TableRow>
          <TableRow>
            <p>
                현재까지 동의한 인원: {agree_num} / {participant_num}
            </p>
            <p>
                현재까지 동의하지 않은 인원: {disagree_num} / {participant_num}
            </p>
          </TableRow>
          <Dialog open={isCompleted}>
          {messages && messages.map((message) =>
             <div>{message.character + ":" + " " + message.text + " "}
              <br></br>
               </div>
              
               )
               }
        </Dialog>  
      </div>
        );
    
}

export default Vote;
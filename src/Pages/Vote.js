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
    
    const closeCompleted = () => {
        setCompleted(false);
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
                 <button type="button" class="btn btn-default" class="x_button"
                                onClick={closeCompleted} class="right_align1">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
               </button>
        </Dialog>  
      </div>
        );
    
}

export default Vote;
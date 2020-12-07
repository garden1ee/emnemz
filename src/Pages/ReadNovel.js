import react, {useState} from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import { firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import '../style/ChatMessage.css'

const ReadNovel = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const Open = () => {
        setOpen(true);
      }
    const Close = () => {
        setOpen(false);
      }
    const messagesRef = firestore.collection(`scripts_${props.id}`);
    const query = messagesRef.orderBy('createdAt').limit(10000);
    const [messages] = useCollectionData(query, { idField: 'id' });

    return (
    <div>
        <Button variant="outlined" color="primary" className="ReadnovelBtn" onClick={Open}>
            소설 보러 가기
        </Button>
        <Dialog open={isOpen} onClose={Close} scroll={scroll} fullScreen>
            <DialogTitle><span style={{fontWeight: '700', textAlign: 'center'}}>{props.title}</span></DialogTitle>
            <DialogContent dividers={scroll==="paper"}>
                <DialogContentText>
                    {messages && messages.map(msg => <Script key={msg.id} message={msg}/>)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button onClick={Close} className="btn btn-primary">
                    닫기
                </button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default ReadNovel;

function Script(props) {
    const { text, isScript, character, photoURL } = props.message; 
    return (
    <div>
      <div>
        {isScript ?
      <li className="chat-message">
      <div className="chat-profilebox"><img src={photoURL||'https://i.ibb.co/ChncsT7/1-W35-QUSv-Gpc-Lux-Po3-SRTH4w.png'} alt="character"  style={{width: 50, height: 50, borderRadius: 50/ 2}} />
      <p>{character}</p></div>
        <div className="chat-actionbox"> {text} 
        </div>                                  
          </li>    
        :
      <li className="chat-message">
        <div>
            <div className="chat-actionbox">{character}, {text}
            </div>
        </div>
      </li>
      }  
    </div>
  
  
  </div>
    )
  }


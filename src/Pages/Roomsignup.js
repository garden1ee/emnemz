import react, {useState} from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@material-ui/core";
import { firestore } from "../firebase";

const Roomsignup = (props) => {
    const [isOpen, setOpen] = useState(false);
    const Open = () => {
        setOpen(true);
      }
    const Close = () => {
        setOpen(false);
      }

    return (
    <div>
        <Button variant="outlined" color="primary" onClick={Open}>
            등록하기
        </Button>
        <Dialog open={isOpen} onClose={Close} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>
            <DialogTitle><span style={{fontWeight: '700', textAlign: 'center'}}>소설방 신청</span></DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <button onClick={Close} variant="outlined" color="primary">
                    제출하기
                </button>
                <button onClick={Close} variant="outlined">
                    닫기
                </button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default Roomsignup;



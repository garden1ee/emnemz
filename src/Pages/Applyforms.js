import React, {useState} from 'react';
import { auth, firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {Dropdown} from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Grid, Paper, Button } from "@material-ui/core";

const Applyforms = (props) => {
    const [isOpen, setOpen] = useState(false);
    const Open = () => {
        setOpen(true);
      }

    const Close = () => {
        setOpen(false);
      }
    const appRef = firestore.collection(`rooms/${props.roomid}/applyforms`);
    const query = appRef.orderBy('uid');
    const [appforms] = useCollectionData(query,{ idField: 'id' });
    return (
    <div>
        <Dropdown.Item className="WRdropdownedMenu"
        onClick={Open}>
            참가 요청 목록
        </Dropdown.Item>
        <Dialog open={isOpen} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>    
            <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>참가 신청서</span></DialogTitle>
            <DialogContent style={{padding: '30px'}}>
                <Grid container spacing={2}>
                    {appforms && appforms.map(app => <Form key={app.id} form={app}/>)}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={Close}> 닫기 </Button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default Applyforms;

const Form = (props) => {
    <Grid item xs={6}>
        <Paper style={{marginBottom: "10px", paddingBottom:"10px"}}>
            <p>유저: {props.form.displayName}</p>
            <p>희망 캐릭터: {props.form.chara}</p>
            <p>지원 이유: {props.form.reason}</p>
            <p>각오: {props.form.determ}</p>
            <p>한마디: {props.form.words}</p>
        </Paper>
    </Grid>
}

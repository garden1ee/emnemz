import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { Grid, Button } from "@material-ui/core";

const NovelRoomInfo = ( { info:{ title, profilePic, genre, hashtag, intro, authorwords } }) => {
    const [isOpen, setOpen] = useState(false);
    const Open = () => {
        setOpen(true);
      }

    const Close = () => {
        setOpen(false);
      }
    return (
    <div>
        <Dropdown.Item className="WRdropdownedMenu"
        onClick={Open}>
            소설 정보
        </Dropdown.Item>
        <Dialog open={isOpen} fullWidth='true' maxWidth="md" style={{padding: '30px'}}>    
            <DialogTitle style={{padding: '20px'}}><span style={{fontWeight: '700'}}>소설방 정보</span></DialogTitle>
            <DialogContent style={{padding: '30px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        <img src={profilePic} width= "200" height = "200" alt="profile"/>
                    </Grid>
                    <Grid item xs={8}>
                        <p style={{fontWeight: '700'}}>작품명:  {title}</p>
                        <p>장르:  {genre}</p>
                        <p>해시태그:  {hashtag}</p>
                        <p>작품 소개: {intro}</p>
                    </Grid>
                    <Grid item xs={12} style={{
                        paddingTop: "10px", paddingLeft: '15px'}}>
                    <p>작가의 말:  {authorwords}</p>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={Close}> 뒤로 가기 </Button>
            </DialogActions>
        </Dialog>
    </div>);
}

export default NovelRoomInfo;


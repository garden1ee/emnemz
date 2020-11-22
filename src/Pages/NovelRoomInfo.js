import react, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { lightBlue } from '@material-ui/core/colors';

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
        <Dialog open={isOpen}>    

            <div>
                <DialogContent style={{width: 600}}>
                    <TableRow>
                        <img src= {profilePic} width="200" height="200" alt="profile"/>
                 
                         <br></br>
                        <p className="NV-li">
                            <TableRow> 작품명:   {title} </TableRow>
                            
                            <TableRow>장르:  {genre}</TableRow>
                            <br></br>
                            <TableRow> 해시 태그:  {hashtag}</TableRow>
                            <br></br>
                            <TableRow> 작품 소개: {intro}</TableRow>
                        </p>
            
                    </TableRow>
                    <TableRow>
                        <TableCell style={{width:500}}> 작가의 말: {authorwords}</TableCell>
            
                    </TableRow>
                </DialogContent>

                <DialogContent>

                <button onClick={Close} class="btn btn-primary">
                    뒤로 가기
                </button>
                </DialogContent>
     
            </div>

        </Dialog>
    </div>);
}

export default NovelRoomInfo;


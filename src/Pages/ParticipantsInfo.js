import react, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { lightBlue } from '@material-ui/core/colors';

const ParticipantsInfo = ( { characters }) => {
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
            참여자 목록
        </Dropdown.Item>
        <Dialog open={isOpen}>    

            <div>
                <DialogContent style={{width: 1000}}>
                    <TableRow>
                        {characters.map(ch => <Charlist key={ch.id} info={ch} />)}
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
const Charlist = (props) => {
    const {name, pic, user} = props.info;
    return (
        <TableRow>
            <img src={pic} style={{width: 50, height: 50, borderRadius: 50/ 2}}></img>
            {name}
        </TableRow>
    )
}
export default ParticipantsInfo;


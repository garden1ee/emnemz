import {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

class Vote{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    Open = () =>{
    

        this.setState({
          isOpen: true,
        });
      }
  

  
    Close = () => {
        this.setState({
          isOpen: false
        });
      }

    render(){
        <li>
            <a className="Wr-sidebar-comp">
                <FontAwesomeIcon icon={faVoteYea} />
                <p>투표</p>
            </a>

        </li>
    }
}

export default Vote;
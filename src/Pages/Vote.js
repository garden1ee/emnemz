import {Component, useRef} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import firebase from "firebase/app";
import { auth, getRoomDocument, getScript, firestore } from "../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';

class Vote extends Component{

    constructor(props){
        super(props);

        this.state = {
            agree_num: 0,
            disagree_num: 0,
            voted_num: 0,
            isCompleted: false,
            participant_num: props.participant_num          

        }
        
    }

    voting(isPositive){

        if(isPositive){
            this.setState({
                agree_num: this.state.agree_num + 1
           
              });
            if(this.state.agree_num === this.state.participant_num){

                this.setState({
                    isCompleted: true
                });
               
            }
        }
        else{
            this.setState({
                disagree_num: this.state.disagree_num + 1
           
              });
        }
       
        this.setState({
            voted_num: this.state.voted_num + 1
       
          });

    }
    
    
    render(){
        return(
      <div>
          <TableRow>
              출판 혹은 투표에 동의하시겠습니까?
          </TableRow>
          <TableRow>
            <button type="button" class="btn btn-warning" onClick={() => this.voting(true)}>
                네
            </button>
            <button type="button" class="btn btn-warning" onClick={() => this.voting(false)}>
                아니오
            </button>
          </TableRow>
          <TableRow>
            <p>
                현재까지 동의한 인원: {this.state.agree_num}
            </p>
            <p>
                현재까지 동의하지 않은 인원: {this.state.disagree_num}
            </p>
          </TableRow>
          <Dialog open={this.state.isCompleted}>
            
        </Dialog>  
      </div>
        );
    }
}

export default Vote;
import {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faVoteYea} from '@fortawesome/free-solid-svg-icons';

class Vote extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            agree_num: 0,
            disagree_num: 0,
            voted_num: 0,
            participant_num: 7            

        }
    }

    voting= (isPositive) =>{

        if(isPositive){
            this.setState({
                agree_num: this.state.agree_num + 1
            });
           
           
        }
        else{
            this.setState({
                disagree_num: this.state.disagree_num + 1
            });
        }

        this.setState({
            voted_num: this.state.voted_num + 1
        });
    

       /* if(this.state.agree_num === this.state.participant_num){
            // 출판한 내용 모으기 
        }*/

    }
    Open = () =>{
        this.setState({
            isOpen: true
        });
    }
    
    Close = () =>{
        this.setState({
            isOpen: false
        });
    }

    render(){
        return(
      <div>
            
            <a className="Wr-sidebar-comp"><FontAwesomeIcon icon={faVoteYea} 
            onClick={this.Open}/>
               <p> 
                                   
               </p>
            </a>
            투표하기
            <Dialog open={this.state.isOpen} >
         
            <div>
            <DialogContent>
            <TableRow>
                출판에 동의하시겠습니까?
            </TableRow>
            <TableRow>
                <button type="button" class="btn btn-warning" onClick={this.voting}>
                    네
                </button>
                <button type="button" class="btn btn-warning" onClick={this.voting}>
                    아니오
                </button>
            </TableRow>
            <TableRow>
                <p>
                    현재까지 동의한 인원: {this.state.agree_num}
                </p>
                <br>
                </br>
                <p>
                    현재까지 동의하지 않은 인원: {this.state.disagree_num}
                </p>
            </TableRow>
            <TableRow>
            <button onClick={this.Close} class="btn btn-primary">
                    뒤로가기
                </button>
            </TableRow>
            </DialogContent>
            
            
            </div>
 
         </Dialog>
          

      </div>
        );
    }
}

export default Vote;
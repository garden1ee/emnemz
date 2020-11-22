import {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


class Vote extends Component{

    constructor(props){
        super(props);
        this.state = {
            agree_num: 0,
            disagree_num: 0,
            voted_num: 0,
            participant_num: 7            

        }
    }

    voting(isPositive){

        if(isPositive){
            this.state.agree_num+= 1;
           
        }
        else{
            this.state.disagree_num += 1;
        }

        this.state.voted_num += 1;

    }
    
    
    render(){
        return(
      <div>
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
            <p>
                현재까지 동의하지 않은 인원: {this.state.disagree_num}
            </p>
          </TableRow>

      </div>
        );
    }
}

export default Vote;
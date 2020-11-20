import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends React.Component{
  render(){
    return(
      <TableRow>
        <TableCell><a href="">{this.props.id}</a></TableCell>
        <TableCell><img src= {this.props.image} width="200" height="200" alt="profile"/></TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
      </TableRow>
    )
  }
}
class CustomerProfile extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.image} alt="profile"/>
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}
class CustomerInfo extends React.Component{
  render(){
    return(
      <div>
        <a href="">{this.props.name}</a>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
      </div>
    )
  }
}


export default Customer;

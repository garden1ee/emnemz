import React from 'react';

const btnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 36,
  marginLeft: 30,
  marginTop: 10,
}

const stnstyle={
  border: 0,
  color: "black",
  background: "white",
  fontSize: 24,
  marginLeft:30,
}
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 17,
  marginLeft:30,
  height: 29,
  width: 600,
  marginRight: 10,
}

class Main extends React.Component {
    render() {
        return (
            <div className="main header">
                  <button style={btnstyle} className="header">Service Name</button>
                  <button style={stnstyle} className="header">Writing Room</button>
                  <button style={stnstyle} className="header">Finished Works</button>
                  <button style={stnstyle} className="header">My Pages</button>
                  <button style={stnstyle}  className="header">Setting</button>
                  <button style={stnstyle} className="header">Logout</button>
                  <hr></hr>
                  <input style={searchbarstyle}/>
                  <button style={stnstyle} classname="hashtag">hastag </button>
                  <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
            </div>
          )

    }
}
export default Main;

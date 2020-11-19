import React from 'react';
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 17,
  marginLeft:30,
  height: 29,
  width: 600,
  marginRight: 10,
}
const PublishedList =() => {
    return(
        <div>
          <input style={searchbarstyle}/>
          <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
          <h2>완성된 소설들</h2>
        </div>
    )
};

export default PublishedList;
import React from 'react';
const searchbarstyle={
  color: "black",
  background: "#C4C4C4",
  fontSize: 18,
  marginLeft:30,
  width: 600,
  marginRight: 10,
}

const stly={
  marginLeft:30
}

const PublishedList =() => {
    return(
        <div>
          <h1/>
          <input style={searchbarstyle}/>
          <button onClick={()=>{alert("조금더 시간을 주시면 구현됩니다")}}> 검색</button>
          <ui class="searchbar_char">
            <text style={stly}>해시태그:&nbsp;&nbsp;&nbsp;</text>
            <select name="job">
              <option value="">소설</option>
              <option value="fantagy">판타지</option>
              <option value="cartoon" selected="selected">만화</option>
              <option value="drama">드라마</option>
            </select>&nbsp;&nbsp;&nbsp;
            <text style={stly}>정렬:&nbsp;&nbsp;&nbsp;</text>
              <select name="job">
                <option value="most">최신순</option>
                <option value="popular">인기순</option>
                <option value="" selected="selected">평점순</option>
                <option value="">검색순</option>
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ui>
        </div>
    )
};

export default PublishedList;

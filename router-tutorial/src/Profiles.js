import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Profile from './Profile';
// Link를 이용하면 페이지를 새로 불러오지않고 애플리케이션을 유지하면서 주소만 변경. 여기서 NavLink를 이용하면 스타일까지 설정가능
const profiles = () => {
  const activeStyle = {
    background : 'black',
    color: 'green',
  };
  const activeClassName = {
    background : '#c0ffee',
    color: 'white',
  };  
  return (
    <div>
      <h2>User list:</h2>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} activeClassName={activeClassName} to="/profiles/hesh">hesh</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} activeClassName={activeClassName} to="/profiles/asdf">asdf</NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default profiles;
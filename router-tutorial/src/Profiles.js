import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const profiles = () => {
  return (
    <div>
      <h2>User list:</h2>
      <ul>
        <li>
          <Link to="/profiles/hesh">hesh</Link>
        </li>
        <li>
          <Link to="/profiles/asdf">asdf</Link>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default profiles;
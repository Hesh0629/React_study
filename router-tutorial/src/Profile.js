import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  hesh: {
    name: 'hesh',
    description: 'me',
  },
  asdf: {
    name: 'asdf',
    description: 'qwer',
  },
};
//URL 파라미터 /:(parameter) 를 이용하면 match로 넘어감
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>none exist user</div>;
  }
  //withRouter는 현재 컴포넌트가 자신을 보여주고 있으므로 match를 전달받음
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
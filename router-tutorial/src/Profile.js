import React from 'react';

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
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
import React from 'react';
import qs from 'qs';
const About = ({ location }) => {
  //url 쿼리는 location.search에 위치한다.
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>Introduce</h1>
      <p>this project is practicing react-router</p>
      {showDetail && <p>detail is true now</p>}
    </div>
  );
};

export default About;
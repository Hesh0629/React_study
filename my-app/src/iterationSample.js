import React from 'react';

const iterationSample = () => {
  const names = ['집에', '가고', '싶다', '진짜로'];
  // map의 첫번째 파라미터는 callback 함수이며 새로운 배열 요소를 생성한다. {현재 요소, 인덱스, 원본 배열}
  // key값이 없다면 변화가 일어난 위치를 파악하기 쉬워진다. 단 지금처럼 index를 key값으로 이용하면 중복가능성이 있으니 지양
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default iterationSample;
import React, { useState } from 'react';

//항상 사용자정의 comp의 시작은 대문자로 시작한다.
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '집에' },
    { id: 2, text: '가고' },
    { id: 3, text: '싶다' },
    { id: 4, text: '진짜' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      // push가 아닌 concat을 해줌으로써 기존 배열을 유지하고 새 배열을 리턴 (불변성 유지 => 성능 최적화)
      text: inputText,
      id: nextId,
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => /*여기다가 조건문 기입*/ name.id !== id);
    setNames(nextNames);
  };
  // map의 첫번째 파라미터는 callback 함수이며 새로운 배열 요소를 생성한다. {현재 요소, 인덱스, 원본 배열}
  // key값이 없다면 변화가 일어난 위치를 파악하기 쉬워진다. 단 지금처럼 index를 key값으로 이용하면 중복가능성이 있으니 지양
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
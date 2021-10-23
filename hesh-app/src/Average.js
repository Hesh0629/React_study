import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('calculating AVG,,,');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null); // 함수형 컴포넌트에서 ref를 쉽게 쓸수있게 도와줌

  // useCallback(생성하고 싶은 함수, 변경될 때 함수가 생성되는 값(배열로 넣음))
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus(); // useRef에 의해 생성된 객체 안의 current값이 실제 element(여기선 input)를 나타냄
  }, [number, list]); //number 혹은 list가 변경됬을 때만 함수를 생성해서 실행

  const avg = useMemo(() => getAverage(list), [list]); // list 배열의 내용이 바뀔때만 getAverage를 호출

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>upload</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>avg:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
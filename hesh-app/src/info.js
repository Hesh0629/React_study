import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    // e.target을 reducer함수의 action값으로 넘겨줌
    dispatch(e.target);
    console.log(e);
  };

  //useEffect는 기본적으로 렌더링 될 때 (마운트 포함) 실행되며 그 이후로는 2번째 파라미터에 의해 결정
  useEffect(
    () => {
      console.log('rendering is complete!');
      console.log(name);
      // 컴포넌트가 unmount, update되기 전에 리턴값인 cleanUp 함수가 실행된다.
      return () => {
        console.log('cleanUp');
        console.log(name);
      };
    },
    /*마운트될때만 실행될거라면 이곳 2번째 파라미터에 [], 빈 배열을 넣어준다
      혹은, 배열 [] 안에다가 검사하고 싶은 값을 넣어주면 요 값이 바뀔때만 실행된다.
    */ []
  );

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};
export default Info;
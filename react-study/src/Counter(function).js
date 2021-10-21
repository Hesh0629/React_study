import React, { useReducer } from 'react';

// reducer : 현재 상태(state)와 업데이트를 위한 정보인 (action) 값을 전달받아 새로운 상태를 반환
// 업데이트 로직이 컴포넌트 함수 밖에 있어서 편리
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // dispatch 는 action을 발생시킴
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // (reducer, 해당 reducer의 기본값)

  return (
    <div>
      <p>
        current 'Counter' value is <b>{state.value}</b> .
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> +1 </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> -1 </button>
    </div>
  );
};

export default Counter;
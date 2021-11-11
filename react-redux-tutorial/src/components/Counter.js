// 프레젠테이셔널 컴포넌트 : 상태 업뎃에는 관여하지 않고 그저 props만 받아와서 화면에 띄움
import React from 'react'

const Counter = ({ number, onIncrease, onDecrease}) => {
  return(
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

/*
const mapStateToProps = (state) => ({
  //state는 스토어가 지니고 있는 상태
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  //store의 내장함수인 dispatch를 받아옴
  increase: () => {
    dispatch(increase()); // action에 increase() (액션생성함수)를 보냄
    console.log('increase');
  },
  decrease: () => {
    dispatch(decrease());
    console.log('decrease');
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

이렇게하면 mapStateToProps, mapDispatchToProps가 store와 연결되고
이후 CounterContainer의 props로 전달된다.

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  })
)(CounterContainer);
*/
// useSelector를 이용하게되면 connect와 달리 부모컴포넌트가 업뎃되도 자신의 props만 안바뀌면 리렌더링을 방지해주는 기능이 사라진다.
export default React.memo(CounterContainer);
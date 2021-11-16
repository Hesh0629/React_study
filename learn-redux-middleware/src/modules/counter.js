import { createAction, handleActions } from 'redux-actions';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 먼저 increaseAsync, decreaseAsync가 액션으로 넘어가서 함수형태로 실행되고 1초후에 increase()와 decrease가 실행
export const increaseAsync = () => dispatch => {
  setTimeout(()=>{
    dispatch(increase());
  }, 1000)
}

export const decreaseAsync = () => dispatch => {
  setTimeout(()=>{
    dispatch(decrease());
  }, 1000)
}

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
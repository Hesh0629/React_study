import { combineReducers } from 'redux';
import counter from './counter';

// 스토어를 만들 때는 리듀서를 하나만 써야해서 묶어줌
// + 파일 이름이 index.js이면 import rootReducer from './modules'만으로도 불러올 수 있음
// 이제 하나의  store에서 dispatch를 받아 처리가능
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
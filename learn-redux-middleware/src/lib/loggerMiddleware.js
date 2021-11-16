/*
const loggerMiddleware = function loggerMiddleware(store){
  return function(next) {
    return function(action){
      // 미들웨어는 액션과 리듀서 사이에서 미리 지정된 작업을 하는 중간자이다. 결국은 [{(함수를 반환하는) 함수}를 반환하는 함수] 이다.
      // next 파라미터는 함수 형태이고 store.dispatch와 같은 역할. 다음 미들웨어로 액션을 넘겨주다가 결국 리듀서한테 가므로 next를 안쓰면 액션이 전달이 안된다.
      // 중간에 store.dispatch를 사용하면 첫번째 미들웨어부터 다시 시작한다.
    };
  };
};

*/
const loggerMiddleware = store => next => action => {
  console.group(action && action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
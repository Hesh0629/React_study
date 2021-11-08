import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';
// context를 이용하여 최상위 컴포넌트인 App에서 부터 state를 받아오는 것이 아니라
// Context API를 통하여서 바로 state를 받아온다.
// Ref: https://ko.reactjs.org/docs/context.html
const App = () => {
  return (
    //Provider를 이용하여 Context의 value를 변경할 수 있다.
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};
export default App;
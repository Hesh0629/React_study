import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';
// context를 이용하여 최상위 컴포넌트인 App에서 부터 state를 받아오는 것이 아니라 (일일이 다 넘겨야하는데 귀찮,,,)
// 그래서 Context API를 통하여서 바로 state를 받아온다.
// Ref: https://ko.reactjs.org/docs/context.html
const App = () => {
  return (
    //Provider로 묶어주면 내부에 있는 Context의 value를 변경할 수 있다.
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
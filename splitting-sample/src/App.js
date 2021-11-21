import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

/*
function App () {
  const onClick = () => {
    // 필요할 때 notify 파일을 불러와서 이용함. 기존에는 분리된 상태였음
    import('./notify').then(result => result.default());
  };
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>살려주세요</p>
      </header>
    </div>
  )
}
*/

//const SplitMe = React.lazy(() => import('./SplitMe'));
//Lodable Component를 이용하면 서버사이드 렌더링에도 이용할 수 있고 편리하다.
const SplitMe = loadable(()=>import('./SplitMe'),{
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    const cur = visible;
    setVisible(!cur);
  };
  const onMouseOver = () => {
    // 이러면 컴포넌트를 미리 불러옴
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>살려주세요</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
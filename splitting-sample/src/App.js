import React from 'react';
import logo from './logo.svg';
import './App.css';

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

export default App;
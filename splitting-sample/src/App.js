import React from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  const onClick = () => {
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
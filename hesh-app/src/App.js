import React, { Fragment, Component, useState, useEffect } from 'react';
import './App.css';
import HeshComp from './HeshComp';
import Counter from './Counter';
import Counter_function from './Counter(function)';
import Say from './Say';
import EventPractice_Class from './EventPractice_Class';
import EventPractice_Function from './EventPractice_Function';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './iterationSample';

import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

import Info from './info';
import Average from './Average';
function App() {
  const name = '얘는 스크립트입니다';
  const if_state = 'if문은 못씁니다';
  const undef = undefined; // 이대로 undef를 return 때리면 에러 발생
  /*const inline_style = {
		backgroundColor: '#c0ffee',
		color: 'black',
		fontWeight: 'bold',
		padding: 30, 
	}; 인라인으로 쓰기 싫어,,, */
  return (
    //Fragment 부터 JSX 시작
    <Fragment>
      {/*JSX 내부에서는 이렇게 주석 처리해야함*/}
      <div className="react">
        <h1>리액트 ㅎㅇ</h1>
        <h2>JSX 문법은 html과 닮은 부분이 많답니다.</h2>
        <h3>{name} 중괄호를 넣어서 스크립트를 들고 올 수 있어요.</h3>
        <h1> 그런데 if문은 못쓴다네요...?</h1>
        {if_state === 'if' ? (
          <h2> 쓸 수 있겠냐고</h2>
        ) : (
          <h2> 네 못씁니다~ 그래서 삼항 연산자를 가져다 써요;;</h2>
        )}
        <h1>더 짧게 쓸래요!</h1>
        {if_state === 'if문은 못씁니다' && <h3> &&를 써가지고 표현 할 수 있어요.</h3>}
        <h1> undefined 를 바로 return하여 렌더링 하지않기 (에러발생)</h1>
        {undef || '대신에 ||기호를 이용해서 쓸 수 있어요'}
      </div>
    </Fragment>
  );
}
// HeshComp 컴포넌트를 불러와서 반환
const HeshComp_f = () => {
  return <HeshComp name="asdf"> ㅁㄴㅇㄹ </HeshComp>;
};
const Counter_f = () => {
  return <Counter />;
};
const Say_f = () => {
  return <Say />;
};
const EventPractice_Class_f = () => {
  return <EventPractice_Class />;
};
const EventPractice_Function_f = () => {
  return <EventPractice_Function />;
};
const ValidationSample_f = () => {
  return <ValidationSample />;
};
class ScrollBox_class extends Component {
  render() {
    return (
      /* 
        앞으로 this.scrollBox 는 ScrollBox 컴포넌트를 가리키게 된다
        더 나아가 ScrollBox내부에 있는 메서드들을 이용할 수 있다.
      */
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>To Bottom</button>
      </div>
    );
  }
}
class iterationSample_class extends Component {
  render() {
    return <IterationSample />;
  }
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class lifeCycleSample_class extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Random Color</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

const Info_f = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

const Counter_function_f = () => {
  return <Counter_function />;
};
const Average_f = () => {
  return <Average />
};
export default Average_f;
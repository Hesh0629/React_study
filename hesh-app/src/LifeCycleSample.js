import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  /*------------------Mount: DOM이 생성되고 웹에 나타나는 과정------------------------------*/

  // 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // props에 있는 값을 state에 넣을 때 사용하는 메서드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //컴포넌트가 웹에 나타난 후 호출되는 메서드
  componentDidMount() {
    console.log('componentDidMount');
  }

  /*---------------------------------Update--------------------------------------*/

  //컴포넌트를 리렌더링 할지말지 결정 (true면 렌더링, false면 무시)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  //컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출. 보통 업데이트 직전에 참고할 일이 있을 때 이용 (스크롤바 유지)
  //return vlaue는 snapshot으로 밑에 componentDidUpdate에서 이용 가능하다
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리렌더링이 완료된 이후에 실행. 여기서 DOM관련 처리를 해도 무방. 또한 getSnapshotBeforeUpdate에서 리턴한 snapshot값 이용 가능
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('before update: ', snapshot);
    }
  }
  /*--------------------Unmount-------------------------------------*/
  //컴포넌트가 사라지기 전에 호출되는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /*--------------------요건 평범한 렌더-------------------------------*/
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/*this.props.missing.value*/}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }
}
export default LifeCycleSample;
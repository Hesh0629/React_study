import React, { Component } from 'react';

class HistorySample extends Component {
  // 뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  // 페이지에 변화가 생길때마다 실행됨
  componentDidMount() {
    this.unblock = this.props.history.block('진짜 감?');
  }

  // 컴포넌트가 언마운트되면 질문 멈춤
  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>goBack</button>
        <button onClick={this.handleGoHome}>goHome</button>
      </div>
    );
  }
}

export default HistorySample;
import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  //input = React.createRef();
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };
  handleOnKeypress = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        clicked: true,
        validated: this.state.password === '0000',
      });
    }
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          onKeyPress={this.handleOnKeypress}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'fail') : ''}
        />
        <button onClick={this.handleButtonClick}>validate</button>
      </div>
    );
  }
}
export default ValidationSample;
import React, { Component } from 'react';

class EventPractice extends Component {
	state = {
		message: '',
		username: '',
	};

	handleChange = (e) => {
		this.setState({
			//객체 안에서 key값을 []로 묶으면 그 안에 넣은 레퍼런스가 가리키는 값을 key로 이용
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.handleClick();
		}
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="username"
					placeholder="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="message"
					placeholder="message"
					value={this.state.message}
					//onChange는 SyntheticEvent를 파라미터로 넘겨준다.
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default EventPractice;
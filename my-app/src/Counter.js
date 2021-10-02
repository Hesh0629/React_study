import React, { Component } from 'react';

class Counter extends Component {
	/* constructor(props) {
		super(props);
		this.state = {
			number: 0,
			fixedNumber: 0
		};
	}*/
	// constructor를 이용하지 않고도 state의 초기값을 설정 가능하다.
	state = { 
		number: 0,
		fixedNumber: 0
	};
	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지않는 값: {fixedNumber}</h2>
				<button
					onClick={() => {
						this.setState(prevState =>{
							return{
								number:prevState.number+1
							};
						});
						this.setState(prevState => ({
							number:prevState.number+1
						}));
					}}
				>
					+1
				</button>
			</div>
		);
	};
}
export default Counter;
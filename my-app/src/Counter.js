// https://reactjs.org/docs/react-component.html#setstate 비동기 처리와 setState를 잘 정리한 공식홈페이지 글,,
import React, { Component } from 'react';

// 클래스형 컴포넌트!
class Counter extends Component {
	/* constructor(props) {
		super(props);
		this.state = {
			number: 0,
			fixedNumber: 0
		};
	}*/
	// constructor를 이용하지 않고도 state의 초기값을 설정가능하다.
	state = {
		number: 0,
		fixedNumber: 0,
	};
	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지않는 값: {fixedNumber}</h2>
				<button
					onClick={() => {
						// this.setState를 쓰면 비동기적으로 업뎃됨
						// 이처럼 setState를 할 때, 함수를 넘겨주면 바로 업뎃
						this.setState(
							(prevState) => {
								console.log('asdf', prevState);
								return {
									number: prevState.number + 1,
								};
							},
							//setState의 두번째 파라미터로, 값 업데이트 이후에 진행할 콜백함수 등록 가능
							() => {
								//얼래리 근데 밑에있는 setState를 통해 업데이트된 값이 나온다.
								//콜백함수니까 자신이 속한 setState만 처리하고 실행되는거 아닌가...?
								// 정답은 아니다. setState의 콜백함수는 진짜로 모든 setState의 실행을 마치고 실행되는 함수이다.
								//그래서 2가 늘어난 최종 결과값을 뿌린다;;
								console.log('방금 setState를 호출함 ', this.state);
							}
						);

						// 즉시 실행 함수에서 값을 바로 변환하는 방법
						this.setState(
							(prevState) => ({
								number: prevState.number + 1,
							}),
							() => {
								console.log('방금 setState를 호출함2 ', this.state);
							}
						);
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
export default Counter;
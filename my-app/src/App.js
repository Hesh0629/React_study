import React, { Fragment } from 'react';
import './App.css';
import HeshComp from './HeshComp';
import Counter from './Counter';
import Say from './Say'
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
export default Say_f;
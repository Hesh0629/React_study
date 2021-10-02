// useState는 setState와 달리 비동기적으로 처리되거나 그런건 없어서 여러번 사용 가능
import React, { useState } from 'react';

const Say = () => {
	const [message, setMessage] = useState('기본값 넣는 곳'); // ret = {현재상태, 상태바꿀 함수 == 세터함수}
	const onClickEnter = () => setMessage('안녕하세요!');
	const onClickLeave = () => setMessage('안녕히가세요!');

	const [color, setColor] = useState('black');

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1 style={{ color }}>{message}</h1>
			<button style={{ color: 'red' }} onClick={() => setColor('red')}>
				빨강
			</button>
			<button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
				파랑
			</button>
			<button style={{ color: 'green' }} onClick={() => setColor('green')}>
				초록
			</button>
		</div>
	);
};

export default Say;
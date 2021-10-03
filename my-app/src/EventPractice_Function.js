import React, { useState } from 'react';

const EventPractice = () => {
	const [form, setForm] = useState({
		username: '',
		message: '',
	});
	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, //form을 복사해와서
			[e.target.name]: e.target.value, // [e.target.name]만 바꿔주기
		};
		setForm(nextForm); //세터함수
	};
	const onClick = () => {
		alert(username + ': ' + message);
		setForm({
			username: '',
			message: '',
		});
	};
	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};
	return (
		<div>
			<h1>Event Practice</h1>
			{/*클래스형과 달리 input의 name을 중요하게 쓰진 않는다.*/}
			<input
				type="text"
				name="username"
				placeholder="username"
				value={username}
				onChange={onChange}
			/>
			<input
				type="text"
				name="message"
				placeholder="message"
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>Confirm</button>
		</div>
	);
};
export default EventPractice;
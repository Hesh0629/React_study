import React from 'react';
import PropTypes from 'prop-types';
const HeshComp = ({ name, children }) => {
	const inline_style = {
		backgroundColor: '#c0ffee',
		color: '#79794d',
		fontWeight: 'bold',
		padding: 30,
	}; //인라인으로 쓰기 싫어,,,
	return (
		<div style={inline_style}>
			ㅎㅇ 이친구 이름은 {name}입니다. <br />
			children value는 {children} 입니다. <br />
			comp사이에 있는 값을 띄웁니다.
		</div>
	);
};
HeshComp.defaultProps = {
	name: 'default name',
	children: 'default children',
};
HeshComp.propTypes = {
	name: PropTypes.string.isRequired,
	// 이러면 name property는 반드시 string 형태로 누락되지 않고전달해야함
	// unidefined로 보내면 console에서 난리침
};
export default HeshComp;
import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  // useContext를 이용하여 편리하게 쓰는 것이 가능
  const { state } = useContext(ColorContext);
  return (
    /*설정된 value는 consumer를 통해 받아온다. 아래에서 children을 함수 형태로 넘겨주고 있다.
    <ColorConsumer>
      {(value) => (
        //2개 이상의 태그는 하나의 태그로 묶어야 한다
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer> */
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
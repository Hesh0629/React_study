import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    //설정된 value는 consumer를 통해 받아온다. 아래에서 children을 함수 형태로 넘겨주고 있다.
    // https://ko.reactjs.org/docs/context.html
      <ColorContext.Consumer>
        {(value) => (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.color,
            }}
          />
        )}
      </ColorContext.Consumer>
  );
};

export default ColorBox;
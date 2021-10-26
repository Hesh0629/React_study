import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// size 객체에 따라 자동으로 media 쿼리 함수를 만든다.
// ref: https://styled-components.com/docs/advanced 
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width:768px;`}
  ${media.tablet`width:100%px;`}
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-in;
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    //스타일 코드 여러줄을 props에 따라 넣어야할 때, css를 styled-components에서 불러야한다.
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>Hello</Button>
    <Button inverted={true}>only bound</Button>
  </Box>
);

export default StyledComponent;
import React, { createContext, useState } from 'react';
//미리 원하는 value들을 설정하여 두고,,,
const ColorContext = createContext({
  state: { color: '#c0ffee', subcolor: '#B4FE98' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#c0ffee');
  const [subcolor, setSubcolor] = useState('#B4FE98');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext; // const ColorConsumer = ColorContext.Consumer 와 같은 의미
export { ColorProvider, ColorConsumer };
export default ColorContext;
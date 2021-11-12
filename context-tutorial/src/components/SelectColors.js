import React, {useContext } from 'react';
// eslint-disable-next-line
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['#61C0BF', '#BBDED6', '#FAE3D9', '#FFB6B9', '#FFE2E2', '#F6F6F6', '#8785A2'];

const SelectColors = () => {
  /*return (
    <div>
      <h2>Select Color</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={()=>actions.setColor(color)}
                onContextMenu={e=>{
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
  */
  const {actions} = useContext(ColorContext);
  return (
    <div>
      <h2>Select Color</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColors;
import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
  return(
    {/*백틱 ` 문자로 문자열 안에 JS reference 넣기가 편해짐*/},
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Hello, i'm <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
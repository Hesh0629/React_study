import React from 'react';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';
//classnames의 bind를 이용하여 미리 클래스를 받아와서 이용
// cs('wrapper') == styles.wrapper와 같은 의미
const cx = classNames.bind(styles);
const CSSModule = () => {
  return (
    {
      /*
      <div className={`${styles.wrapper} ${styles.inverted}`}>
      백틱 ` 문자로 문자열 안에 JS reference 넣기가 편해짐
      하지만 classNames를 이용하면 더 간단  
    */
    },
    (
      <div className={cx('wrapper', 'inverted')}>
        Hello, i'm <span className="something">CSS Module</span>
      </div>
    )
  );
};
export default CSSModule;
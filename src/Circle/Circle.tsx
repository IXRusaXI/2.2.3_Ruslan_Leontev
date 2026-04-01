import './Circle.css';
import classNames from 'classnames';
import { MutableRefObject, useState, forwardRef, useEffect } from 'react';

interface Props {
  color: string;
  active?: boolean;
  onClick: () => {};
  onFocus: () => {};
  onKeyDown: () => {};
}

export const Circle = forwardRef(({onClick, onFocus, onKeyDown, color, active}: Props, ref) => {

  return <div  
    ref={ref} 
    type="button" 

    onClick={() => onClick(ref)}
    onFocus={onFocus} 
    onKeyDown={onKeyDown} 
    className={classNames(
      "circle",
      "circle-" + color,
      active && ("circle-" + color + "--active")
    )} 
  />;
}
)

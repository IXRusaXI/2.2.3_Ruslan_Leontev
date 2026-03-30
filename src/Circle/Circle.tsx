import './Circle.css';
import classNames from 'classnames';
import { MutableRefObject, useState, forwardRef } from 'react';

// interface Props {
//   color: string;
//   active?: boolean;
// }

export const Circle = forwardRef((props, ref) => {
  // console.log('Получено в кружочке', props.color, props.active)

  return <div ref={ref} onClick={props.onClick} className={classNames(
    "circle",
    "circle-" + props.color,
    props.active() && ("circle-" + props.color + "--active")
  )} />;
}
)

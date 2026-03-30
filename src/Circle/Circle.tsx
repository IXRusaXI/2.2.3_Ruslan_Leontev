import './Circle.css';
import classNames from 'classnames';
import { MutableRefObject, useState, forwardRef } from 'react';

// interface Props {
//   color: string;
//   active?: boolean;
// }

export const Circle = forwardRef((props, ref) => {
  // console.log('Получено в кружочке', props.color, props.active)
  const [activeState, setActiveState] = useState(props.active)

  const toggleActive = () => {
    setActiveState(!activeState)
  }

  return <div ref={ref} onClick={props.onClick} className={classNames(
    "circle",
    "circle-" + props.color,
    activeState && ("circle-" + props.color + "--active")
  )} />;
}
)

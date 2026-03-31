import './Circle.css';
import classNames from 'classnames';
import { MutableRefObject, useState, forwardRef, useEffect } from 'react';

// interface Props {
//   color: string;
//   active?: boolean;
// }

export const Circle = forwardRef((props, ref) => {
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    // console.log('Триггерю', ref, props.active)
    setActive(ref.current === props.active)
    ref.current.focus()
  }, [ref, props.active])

  const onKeyDown = (evt) => {
    evt.preventDefault()
    switch(evt.key) {
      case 'Tab' :
        console.log("Нажал таб", props.next())

        props.next().current.focus()
        break
      case 'Enter' :
        activate()
    }
  }

  return <div type="checbox" tabIndex={0} ref={ref} onKeyDown={onKeyDown} onClick={props.onClick} className={classNames(
    "circle",
    "circle-" + props.color,
    active && ("circle-" + props.color + "--active")
  )} />;
}
)

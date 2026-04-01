import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [active, setActive] = useState({})

  const redRef = useRef(null)
  const orangeRef = useRef(null)
  const greenRef = useRef(null)
  const list = [redRef, orangeRef, greenRef]

  const keyDown = (e) => {
    switch(e.key) {
      case 'Tab':
        e.preventDefault()
        if (activeIndex === 2) {
          setActiveIndex(0)
        } else {
          setActiveIndex(activeIndex + 1)
        }
        break
      case 'Enter':
        setActive(list[activeIndex])
        break
    }
  }

  const focus = (ref) => {
    setActiveIndex(list.indexOf(ref))
  }

  const activate = () => {
    setActive(list[activeIndex])
  }

  const click = (ref) => {
    focus(ref)
    // activate()
  }

  useEffect(() => {
    activate()
  }, [])

  useEffect(() => {
    list[activeIndex].current.focus()
  }, [activeIndex])

  // useEffect(() => {
  //   list[activeIndex].current.focus()
  // }, [active])

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle 
          ref={redRef} 
          color="red" 
          active={redRef === active} 
          onClick={click}
          onKeyDown={keyDown}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={orangeRef} 
          color="orange" 
          active={orangeRef === active}
          onClick={click} 
          onKeyDown={keyDown}
        />
      </div>
      <div className="semaphore-item">
        <Circle 
          ref={greenRef} 
          color="green" 
          active={greenRef === active}
          onClick={click} 
          onKeyDown={keyDown}
        />
      </div>
    </div>
  );
}

export default App;

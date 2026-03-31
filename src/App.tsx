import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  const [activeCircle, setActiveCircle] = useState({})
  const [index, setIndex] = useState(0)

  const redRef = useRef(null)
  const orangeRef = useRef(null)
  const greenRef = useRef(null)

  const list = [redRef, orangeRef, greenRef]

  const next = () => {
    if (index < list.length) {
      setIndex(index + 1)
      return list[index + 1]
    }

    setIndex(0)
    return list[0]
  }

  useEffect(() => {
    setActiveCircle(redRef.current)
  }, [])

  const changeActiveCircle = (evt) => {
    console.log(redRef, orangeRef, greenRef)

    setActiveCircle(evt.target)
    console.log(activeCircle)
  }

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle ref={redRef} color="red" active={activeCircle} onClick={changeActiveCircle} next={() => next()}/>
      </div>
      <div className="semaphore-item">
        <Circle ref={orangeRef} color="orange" active={activeCircle} onClick={changeActiveCircle} next={() => next()}/>
      </div>
      <div className="semaphore-item">
        <Circle ref={greenRef} color="green" active={activeCircle} onClick={changeActiveCircle} next={() => next()}/>
      </div>
    </div>
  );
}

export default App;

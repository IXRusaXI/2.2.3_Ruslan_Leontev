import { useState, useRef } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

function App() {
  // const [activeCircle, setActiveCircle] = useState({})

  const redRef = useRef(null)
  const orangeRef = useRef(null)
  const greenRef = useRef(null)

  const activeCircle = useRef()

  const list = [redRef, orangeRef, greenRef]

  const changeActiveCircle = (evt) => {
    console.log(redRef, orangeRef, greenRef)

    activeCircle.current = evt.target
    console.log(activeCircle)
    clearAll()
  }

  // const clearAll = () => {
  //   list.map(ref => {
  //     if (!!ref) {
  //       if (ref !== activeCircle) {
          
  //       }
  //     }
  //   })
  // }

  const getActive = (element) => {
    console.log("Сравнение", element, activeCircle, element === activeCircle)
    return element === activeCircle
  }

  return (
    <div className="semaphore-container">
      <div className="semaphore-item">
        <Circle ref={redRef} color="red" active={(redRef) => getActive(redRef)} onClick={changeActiveCircle}/>
      </div>
      <div className="semaphore-item">
        <Circle ref={orangeRef} color="orange" active={(orangeRef) => getActive(orangeRef)} onClick={changeActiveCircle}/>
      </div>
      <div className="semaphore-item">
        <Circle ref={greenRef} color="green" active={(greenRef) => getActive(greenRef)} onClick={changeActiveCircle}/>
      </div>
    </div>
  );
}

export default App;

import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
function Task({ _key, taskName, isComplete, handleComplete, handleDelete }) {
  const lineWidthRef = useRef();
  const [lineWidth, setLineWidth] = useState(0);
  useEffect(() => {
    setLineWidth(lineWidthRef.current.clientWidth);
  });
  const styles = useSpring({
    width: isComplete ? lineWidth : 0,
    config: { tension: 500, friction: 50 },
  });
  const [active, setActive] = useState(false);
  const activeStyle = useSpring({
    scale: active ? 0.8 : 1,
    config: { tension: 500 },
  });

  return (
    <div className="task">
      <button
        className={isComplete ? "checkbox checked" : "checkbox unchecked"}
        onClick={() => {
          handleComplete(_key);
        }}
      >
        <i
          className={isComplete ? "bx bxs-checkbox-checked" : "bx bx-checkbox"}
        ></i>
      </button>
      <animated.div className="lineThrough" style={styles}></animated.div>
      <div className="taskName" ref={lineWidthRef}>
        {taskName}
      </div>
      <animated.div
        style={activeStyle}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        onClick={() => handleDelete(_key)}
        className="controlButtons"
      >
        <i className="delete bx bx-x"></i>
      </animated.div>
    </div>
  );
}

export default Task;

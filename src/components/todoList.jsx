import { useEffect } from "react";
import { useTransition, animated } from "react-spring";

import Task from "./task.jsx";

function TodoList({ items, handleComplete, handleDelete }) {
  const transitions = useTransition(items, {
    key: (item) => item.key,
    from: { height: 0, opacity: 0 },
    enter: {
      height: 65,
      opacity: 1,
    },
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 700, friction: 100 },
  });

  return (
    <div className="shadow_overlay">
      {transitions((styles, item) => (
        <animated.div style={{ ...styles }} className="transition">
          <div className="taskContainer">
            <Task
              _key={item.key}
              taskName={item.name}
              isComplete={item.isComplete}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default TodoList;

import { useState } from "react";
import { animated } from "react-spring";
import TodoList from "./todoList.jsx";

function Todo({ taskKey, setTaskKey, setTaskList, taskList }) {
  const handleComplete = (_key) => {
    setTaskList(
      taskList.map((task) => {
        const { key, name, isComplete, lineWidth } = task;
        return key === _key
          ? {
              key: key,
              name: name,
              isComplete: !isComplete,
              lineWidth: lineWidth,
            }
          : task;
      })
    );
  };
  const handleDelete = (_key) => {
    setTaskList(taskList.filter(({ key }) => key !== _key));
  };
  const deleteCompleted = () => {
    setTaskList(taskList.filter(({ isComplete }) => isComplete !== true));
  };
  const selectAll = () => {
    setTaskList(
      taskList.map((task) => {
        const { key, name, isComplete, lineWidth } = task;
        return {
          key: key,
          name: name,
          isComplete: true,
          lineWidth: lineWidth,
        };
      })
    );
  };
  const [task, setTask] = useState({
    key: taskKey,
    name: "",
    isComplete: false,
  });
  const handleKeyPress = (e) => {
    if (e.code === "Enter" && task.name !== "") {
      setTaskList((prev) => [task, ...prev]);
      setTask({
        key: taskKey,
        name: "",
        isComplete: false,
      });
      setTaskKey((prev) => prev + 1);
    }
  };

  return (
    <div className="contents">
      <div id="taskHeader">
        <input
          type="text"
          id="taskField"
          placeholder="Enter task..."
          value={task.name}
          spellCheck={false}
          onChange={(event) =>
            setTask({
              key: taskKey,
              name: event.target.value,
              isComplete: false,
            })
          }
          autoComplete="off"
          autoFocus="on"
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        ></input>
        <button
          id="addBtn"
          disabled={task.name === "" ? true : false}
          onClick={() => {
            setTaskList((prev) => [task, ...prev]);
            setTask({
              key: taskKey,
              name: "",
              isComplete: false,
            });
            setTaskKey((prev) => prev + 1);
          }}
        >
          <i
            className="bx bx-list-plus"
            id={task.name === "" ? "disabled" : "enabled"}
          ></i>
        </button>
      </div>
      <div className="shadow-overlay"></div>
      <div className="todoMenu">
        <button
          className="topButton"
          id="selectAll"
          onClick={() => selectAll()}
        >
          <i className="check bx bx-check-double"></i> Select All
        </button>
        <button
          className="topButton"
          id="deleteCompleted"
          onClick={() => deleteCompleted()}
        >
          <i className="delete bx bx-x"></i>Delete Completed
        </button>
      </div>
      <div id="taskList">
        <TodoList
          items={taskList}
          setItems={setTaskList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Todo;

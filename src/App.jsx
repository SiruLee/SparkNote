import SideBar from "./components/sidebar.jsx";
import Spark from "./components/spark.jsx";
import Todo from "./components/todo.jsx";
import Clock from "./components/clock.jsx";
import Weather from "./components/weather.jsx";
import About from "./components/about.jsx";
function App({
  index,
  setIndex,
  subject,
  setSubject,
  body,
  setBody,
  taskKey,
  setTaskKey,
  taskList,
  setTaskList,
  clockIndex,
  setClockIndex,
  hours,
  minutes,
  seconds,
  milliseconds,
  startBtn,
  resetBtn,
  handlePause,
  handleReset,
  handleStart,
}) {
  return (
    <div className="App">
      <SideBar setIndex={setIndex} index={index} />
      {index === 0 ? (
        <Spark
          setSubject={setSubject}
          setBody={setBody}
          subject={subject}
          body={body}
        />
      ) : null}
      {index === 1 ? (
        <Todo
          setTaskKey={setTaskKey}
          taskKey={taskKey}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      ) : null}
      {index === 2 ? (
        <Clock
          index={clockIndex}
          setIndex={setClockIndex}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          milliseconds={milliseconds}
          startBtn={startBtn}
          resetBtn={resetBtn}
          handlePause={handlePause}
          handleReset={handleReset}
          handleStart={handleStart}
        />
      ) : null}
      {index === 3 ? <Weather /> : null}
      {index === 4 ? <About /> : null}
    </div>
  );
}

export default App;

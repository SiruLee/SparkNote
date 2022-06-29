import { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";
import "./App.css";
import "./styles/titlebar.css";
import "./styles/sidebar.css";
import "./styles/contentscommon.css";
import "./styles/spark.css";
import "./styles/todo.css";
import "./styles/todo.css";
import "./styles/about.css";
import "./styles/weather.css";

function Data() {
  const [index, setIndex] = useState(0);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskKey, setTaskKey] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMS] = useState(0);
  const [startBtn, setStartBtn] = useState(true);
  const [resetBtn, setResetBtn] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [clockIndex, setClockIndex] = useState(0);
  const setZero = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMS(0);
  };
  useEffect(() => {
    if (milliseconds === 100) {
      setSeconds((prev) => prev + 1);
      setMS(0);
    }
  }, [milliseconds]);
  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
  }, [seconds]);
  useEffect(() => {
    if (minutes === 60) {
      setHours((prev) => prev + 1);
      setMinutes(0);
    }
  }, [minutes]);
  useEffect(() => {
    if (hours === 100) {
      setZero();
    }
  }, [milliseconds]);
  const handleStart = () => {
    const intervalId = setInterval(() => {
      setMS((prev) => prev + 1);
    }, 10);
    setStartBtn(false);
    setResetBtn(false);
    setIntervalId(intervalId);
  };
  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId();
    setStartBtn(true);
    setResetBtn(true);
  };
  const handleReset = () => {
    setZero();
    setStartBtn(true);
    setResetBtn(false);
  };
  return (
    <App
      index={index}
      setIndex={setIndex}
      subject={subject}
      setSubject={setSubject}
      body={body}
      setBody={setBody}
      taskKey={taskKey}
      setTaskKey={setTaskKey}
      taskList={taskList}
      setTaskList={setTaskList}
      clockIndex={clockIndex}
      setClockIndex={setClockIndex}
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
  );
}
export default Data;

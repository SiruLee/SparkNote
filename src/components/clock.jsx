import { useEffect, useState } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import useMeasure from "react-use-measure";
import Localeclock from "./localeclock";
import Stopwatch from "./stopwatch";
import "../styles/clock.css";
function Clock({
  seconds,
  minutes,
  hours,
  milliseconds,
  startBtn,
  resetBtn,
  handlePause,
  handleStart,
  handleReset,
  index,
  setIndex,
}) {
  const [initial, setInitial] = useState(true);
  const [widthRef, { width }] = useMeasure();
  const slide = useSpring({
    x: index ? width / 4 - 2 : -width / 4 + 2,
    config: { mass: 1, friction: 100, tension: 1000 },
  });

  const transitionToLeft = useTransition(index, {
    initial: { transform: "translate3d(0%,0,0)" },
    reset: initial,
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" },
  });
  const transitionToRight = useTransition(index, {
    initial: { transform: "translate3d(0%,0,0)" },
    reset: initial,
    from: { transform: "translate3d(-100%,0,0)" },
    enter: { transform: "translate3d(0%,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });
  return (
    <div className="contents">
      <div id="swapClock" ref={widthRef}>
        <animated.div
          style={
            index
              ? initial
                ? { left: "calc(50% - 2px)" }
                : { ...slide }
              : initial
              ? { left: "2px" }
              : { ...slide }
          }
          id="bar"
        ></animated.div>
        <div
          id="clockMenu"
          style={
            index === 0
              ? {
                  color: "black",
                }
              : {}
          }
          onClick={() => {
            setIndex(0);
            setInitial(false);
          }}
        >
          Clock
        </div>
        <div
          id="stopwatchMenu"
          style={
            index === 1
              ? {
                  color: "black",
                }
              : {}
          }
          onClick={() => {
            setIndex(1);
            setInitial(false);
          }}
        >
          Stopwatch
        </div>
      </div>
      {transitionToRight((style, item) =>
        !item ? <Localeclock style={style} /> : null
      )}
      {transitionToLeft((style, item) =>
        item ? (
          <Stopwatch
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            milliseconds={milliseconds}
            startBtn={startBtn}
            resetBtn={resetBtn}
            handlePause={handlePause}
            handleReset={handleReset}
            handleStart={handleStart}
            style={style}
          />
        ) : null
      )}
    </div>
  );
}

export default Clock;

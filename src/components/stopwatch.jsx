import { animated } from "react-spring";

function Stopwatch({
  seconds,
  minutes,
  hours,
  milliseconds,
  startBtn,
  resetBtn,
  handlePause,
  handleStart,
  handleReset,
  style,
}) {
  return (
    <animated.div id="stopwatch" style={style}>
      <div id="hours1" className="digit">
        {`00${hours}`.slice(-2)[0]}
      </div>
      <div id="hours2" className="digit">
        {`00${hours}`.slice(-2)[1]}
      </div>
      <div className="digit colon">:</div>
      <div id="minutes1" className="digit">
        {`00${minutes}`.slice(-2)[0]}
      </div>
      <div id="minutes2" className="digit">
        {`00${minutes}`.slice(-2)[1]}
      </div>
      <div className="digit colon">:</div>
      <div id="seconds1" className="digit">
        {`00${seconds}`.slice(-2)[0]}
      </div>
      <div id="seconds2" className="digit">
        {`00${seconds}`.slice(-2)[1]}
      </div>
      <div id="milliseconds1" className="digit">
        {`00${milliseconds}`.slice(-2)[0]}
      </div>
      <div id="milliseconds2" className="digit">
        {`00${milliseconds}`.slice(-2)[1]}
      </div>
      <div id="stopwatch-button">
        <button
          id="startBtn"
          onClick={() => {
            startBtn ? handleStart() : handlePause();
          }}
        >
          {startBtn ? "START" : "PAUSE"}
        </button>

        <button
          id="resetBtn"
          disabled={!resetBtn}
          onClick={() => handleReset()}
        >
          RESET
        </button>
      </div>
    </animated.div>
  );
}

export default Stopwatch;

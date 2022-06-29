import { useEffect, useState } from "react";
import { animated } from "react-spring";
function Localeclock({ style }) {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [hr12, setHour12] = useState("");
  const [ampm, setAmpm] = useState("");
  const [day, setDay] = useState();
  useEffect(() => {
    const delta = Date.now() / 1000 - Math.floor(Date.now() / 1000);
    const interval = setInterval(() => {
      const date = new Date();
      setHour(`00${date.getHours()}`.slice(-2));
      setMinute(`00${date.getMinutes()}`.slice(-2));
      setSecond(`00${date.getSeconds()}`.slice(-2));
      setHour12(`00${date.getHours() % 12 || 12}`.slice(-2));
      setDay(date.getDay());
      setAmpm(hour < 12 ? "am" : "pm");
    }, 1 - delta);
    return () => clearInterval(interval);
  });
  return (
    <animated.div id="localeClock" style={style}>
      <div id="day">
        <div className={day === 0 ? "day black" : "day"}>SUN</div>
        <div className={day === 1 ? "day black" : "day"}>MON</div>
        <div className={day === 2 ? "day black" : "day"}>TUE</div>
        <div className={day === 3 ? "day black" : "day"}>WED</div>
        <div className={day === 4 ? "day black" : "day"}>THU</div>
        <div className={day === 5 ? "day black" : "day"}>FRI</div>
        <div className={day === 6 ? "day black" : "day"}>SAT</div>
      </div>
      <div id="timeVisual" className="clock black">
        <span className="TV num">{hr12[0]}</span>
        <span className="TV num">{hr12[1]}</span>
        <span className="TV colon">:</span>
        <span className="TV num">{minute[0]}</span>
        <span className="TV num">{minute[1]}</span>
        <span className="TV colon">:</span>
        <span className="TV num">{second[0]}</span>
        <span className="TV num">{second[1]}</span>
      </div>
      <div id="ampm">
        <div className={ampm === "am" ? "ampm black" : "ampm"}>AM</div>
        <div className={ampm === "pm" ? "ampm black" : "ampm"}>PM</div>
      </div>
    </animated.div>
  );
}

export default Localeclock;

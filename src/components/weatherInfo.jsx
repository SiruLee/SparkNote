import { animated } from "react-spring";
function WeatherInfo({ style, information, location, air }) {
  const qualitative = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  return (
    <animated.div style={style} id="weatherInfo">
      <div id="weatherContainer">
        <div id="primary">
          <div id="weatherIcon">
            <img
              src={
                "https://openweathermap.org/img/wn/" +
                information.weather[0].icon +
                "@2x.png"
              }
            ></img>
          </div>
          <div id="temp">
            {Math.round(information.main.temp)}
            <>&deg;C</>
          </div>
        </div>
        <div id="location">
          <div id="city">{location.city}, </div>
          <div id="country">{location.country_name}</div>
        </div>
        <div id="hl"></div>
        <div id="weatherName">
          {information.weather[0].main} - {information.weather[0].description}
        </div>

        <div id="secondary">
          <div className="weatherModule" id="aqi">
            <div className="weatherTitle">
              <i className="bx bx-loader-circle"></i>Air Quality
            </div>
            <div id="aqiNum" className="infoBody">
              {air.list[0].main.aqi} - {qualitative[air.list[0].main.aqi - 1]}
            </div>
            <div id="tempBarContainer">
              <div id="barCenter">
                <div id="tempBar"></div>
                <div
                  id="circle"
                  style={{ bottom: `${(air.list[0].main.aqi - 1) * 25}%` }}
                ></div>
                <div id="aqiMax" className="aqiMeter">
                  5 - Very Poor
                </div>
                <div id="aqiMin" className="aqiMeter">
                  1 - Good
                </div>
              </div>
            </div>
          </div>
          <div className="weatherModule" id="feel">
            <div className="weatherTitle">
              <i className="bx bxs-thermometer"></i>Feels Like
            </div>
            <div id="feelsLike" className="infoBody">
              {Math.round(information.main.feels_like)}
              <>&deg;C</>
            </div>
          </div>
          <div className="weatherModule" id="pressure">
            <div className="weatherTitle">
              <i className="bx bx-down-arrow-alt"></i>Pressure
            </div>
            <div id="pressureBody" className="infoBody">
              {information.main.pressure}hPa
            </div>
          </div>
          <div className="weatherModule" id="humidity">
            <div className="weatherTitle">
              <i className="bx bx-water"></i>
              Humidity
            </div>
            <div id="humidityBody" className="infoBody">
              {information.main.humidity}%
            </div>
          </div>
          <div className="weatherModule" id="visibility">
            <div className="weatherTitle">
              <i className="bx bx-low-vision"></i>
              Visibility
            </div>
            <div id="visibilityBody" className="infoBody">
              {Math.round(information.visibility / 1000)}km
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}
export default WeatherInfo;

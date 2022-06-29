import { useEffect, useState } from "react";
import { useSpring } from "react-spring";
import axios from "axios";

import Loading from "./loading.jsx";
import Error from "./error.jsx";
import WeatherInfo from "./weatherInfo";

function Weather() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState("");
  const [air, setAir] = useState("");
  const [location, setLocation] = useState("");
  const style = useSpring({
    opacity: loading ? 0 : 1,
  });
  const getData = async () => {
    try {
      const time = new Date();
      const location = await axios.get("https://geolocation-db.com/json/");
      const weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.data.latitude}&lon=${location.data.longitude}&units=metric&appid=d5e739548ba76669ea591aea85dea424`
      );
      const air = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${
          location.data.latitude
        }&lon=${location.data.longitude}&start=${Math.round(
          new Date().getTime() / 1000
        )}&end=${Math.round(
          new Date().getTime() / 1000 + 3600
        )}&appid=d5e739548ba76669ea591aea85dea424`
      );
      setLocation(location.data);
      setWeather(weather.data);
      setAir(air.data);
    } catch (e) {
      setError(true);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="contents">
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <WeatherInfo
          style={style}
          information={weather}
          location={location}
          air={air}
        />
      )}
    </div>
  );
}

export default Weather;

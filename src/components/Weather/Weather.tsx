import React, { useEffect, useState, useMemo } from "react";
import cn from "classnames";
import axios from "axios";
import { intlFormat } from "date-fns";
import useGeolocation from "../../utils/hooks/useGeolocation";
import "./Weather.scss";
import hum from "../../assets/icons/hum.svg";
import windy from "../../assets/icons/windy.svg";
import { ReactSVG } from "react-svg";

const Weather = () => {
  const classes = cn("weather");
  const [currentWeather, setCurrentWeather] =
    useState<undefined | any>(undefined);
  const geo = useGeolocation();

  useEffect(() => {
    if (geo) {
      const { latitude, longitude } = geo;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API}`;
      axios
        .get(url)
        .then((res) => {
          const { data } = res;
          setCurrentWeather(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [geo]);

  return (
    <div className={classes}>
      {currentWeather && (
        <div className={`${classes}__wrapper`}>
          <div className={`${classes}__date`}>
            <span>Today, </span>
            <span className="day">
              {intlFormat(new Date(), { day: "numeric" }, { locale: "en-EN" })}
            </span>
            <span className="month">
              {intlFormat(new Date(), { month: "long" }, { locale: "en-EN" })}
            </span>
          </div>
          <div className="temp">
            {parseInt(currentWeather.main.temp)}
            <sup>&#176;</sup>
          </div>
          <div className="weather-type">
            {currentWeather.weather[0].description}
          </div>
          <ReactSVG className="icon" src={windy} />
          <div className="wind">
            wind <span></span> {currentWeather.wind.speed} km/h
          </div>
          <ReactSVG className="icon" src={hum} />
          <div className="humid">
            humidity <span></span> {currentWeather.main.humidity} %
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

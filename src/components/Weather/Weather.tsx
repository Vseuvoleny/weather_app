import React, { useEffect, useState } from "react";
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
      axios.get(url).then((res) => {
        const { data } = res;
        console.log(data);

        setCurrentWeather(data);
      });
    }
  }, [geo]);

  return (
    <>
      {currentWeather && (
        <div>
          <picture className={`${classes}__icon`}>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`}
              alt={currentWeather.weather[0].description}
            />
          </picture>
          <div className={classes}>
            <div className={`${classes}__wrapper`}>
              <div className={`${classes}__date`}>
                <span>Today, </span>
                <span className="day">
                  {intlFormat(
                    new Date(),
                    { day: "numeric" },
                    { locale: "en-EN" }
                  )}{" "}
                  {intlFormat(
                    new Date(),
                    { month: "long" },
                    { locale: "en-EN" }
                  )}
                </span>
              </div>
              <div className="temp">
                {parseInt(currentWeather.main.temp)}
                <sup>&#176;</sup>
              </div>
              <div className="weather-type">
                {currentWeather.weather[0].description}
              </div>

              <div className="weather-desc wind">
                <ReactSVG className="icon" src={windy} />
                <span className="title">Wind</span> <hr />
                <span className="index">
                  {parseInt(currentWeather.wind.speed)} km/h
                </span>
              </div>
              <div className="weather-desc hum">
                <ReactSVG className="icon" src={hum} />
                <span className="title">Hum</span> <hr />
                <span className="index">{currentWeather.main.humidity} %</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;

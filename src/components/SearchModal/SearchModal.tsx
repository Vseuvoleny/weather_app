import React from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";
import mic from "../../assets/icons/mic.svg";
import clock from "../../assets/icons/clockLine.svg";
import "./SearchModal.scss";
import cn from "classnames";
import { ReactSVG } from "react-svg";

const SearchModal = () => {
  const classes = cn("search-modal");
  return (
    <div className={classes}>
      <div className={`${classes}__container`}>
        <picture className="arrow-right">
          <ReactSVG src={arrowRight} />
        </picture>
        <input
          className="search-input"
          type="text"
          name="city"
          placeholder="Search here"
        />
        <picture className="mic-icon">
          <ReactSVG src={mic} />
        </picture>
      </div>
      <div className={`${classes}__recent-cities`}>
        <h6 className="title">Recent search</h6>
        <div className={`${classes}__cities-container`}>
          <div className={`${classes}__city`}>
            <picture className="clock">
              <ReactSVG src={clock} />
            </picture>
            <p className="city">Surabaya</p>
            <p className="temp">34° / 23°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

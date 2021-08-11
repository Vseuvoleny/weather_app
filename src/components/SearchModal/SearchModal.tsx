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
        <ReactSVG className="arrow-right" src={arrowRight} />
        <input
          className="search-input"
          type="search"
          name="city"
          placeholder="Search here"
        />
        <ReactSVG className="mic-icon" src={mic} />
      </div>
      <div className={`${classes}__recent-cities`}>
        <h6 className="title">Recent search</h6>
        <div className={`${classes}__cities-container`}>
          <div className={`${classes}__city`}>
            <ReactSVG className="clock" src={clock} />
            <p className="city">Surabaya</p>
            <p className="temp">34° / 23°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

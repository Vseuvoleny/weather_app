import React from "react";
import arrowRight from "../../assets/icons/arrowRight.svg";
import mic from "../../assets/icons/mic.svg";
import clock from "../../assets/icons/clockLine.svg";
import "./SearchModal.scss";
import { ReactSVG } from "react-svg";

const SearchModal = () => {
  return (
    <div className="search-modal">
      <div className="search_container">
        <picture>
          <ReactSVG src={arrowRight} />
        </picture>
        <input type="text" name="city" placeholder="Search here" />
        <picture>
          <ReactSVG src={mic} />
        </picture>
      </div>
      <div className="search-recent">
        <h6>Recent search</h6>
        <div className="search-recent-element">
          <picture>
            <ReactSVG src={clock} />
          </picture>
          <p>Surabaya</p>
          <p>34° / 23°</p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

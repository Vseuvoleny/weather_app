import React, { useEffect, useState } from "react";
import axios from "axios";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import "./Search.scss";
import searchIcon from "../../assets/icons/searchIcon.svg";
import location from "../../assets/icons/location.svg";
import notifyIcon from "../../assets/icons/notifyIcon.svg";
import Modal from "../Modal/Modal";
import SearchModal from "../SearchModal/SearchModal";

const Search = () => {
  const wrapper = cn("search");
  const [userCity, setUserCity] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const getUserGeolocation = () => {
    const url = `https://geolocation-db.com/json/${process.env.REACT_APP_GEODB}`;
    axios
      .get(url)
      .then(({ data }) => {
        setUserCity(data.city);
      })
      .catch((error) => console.error(error));
  };

  useEffect(getUserGeolocation, []);

  return (
    <div className={wrapper}>
      {/* {isSearchActive && (
        <Modal>
          <SearchModal />
        </Modal>
      )} */}
      {/* TODO create a portal fn */}
      <ReactSVG
        className={`${wrapper}__geo-icon`}
        src={location}
        onClick={getUserGeolocation}
      />
      <div
        className={`${wrapper}__user-location`}
        onClick={() => setIsSearchActive(true)}
      >
        <span className="city">{userCity || "Loading..."}</span>
        <ReactSVG className="tab-toggle" src={searchIcon} />
      </div>

      <ReactSVG className={`${wrapper}__notify`} src={notifyIcon} />
    </div>
  );
};

export default Search;

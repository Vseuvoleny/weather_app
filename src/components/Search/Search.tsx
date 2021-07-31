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

  return (
    <div className={wrapper}>
      {isSearchActive && (
        <Modal>
          <SearchModal />
        </Modal>
      )}
      <picture className={`${wrapper}__geo`}>
        <ReactSVG src={location} />
      </picture>

      <span className={`${wrapper}__city`}>Samara</span>
      <picture className={`${wrapper}__tab-toggle`}>
        <ReactSVG src={searchIcon} onClick={() => setIsSearchActive(true)} />
      </picture>
      <picture className={`${wrapper}__notify`}>
        <ReactSVG src={notifyIcon} />
      </picture>
    </div>
  );
};

export default Search;

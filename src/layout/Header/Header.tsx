import React from "react";
import Search from "../../components/Search/Search";
import cn from "classnames";
import "./Header.scss";

const Header = () => {
  const classes = cn("header-wrapper");
  return (
    <div className={classes}>
      <Search />
    </div>
  );
};

export default Header;

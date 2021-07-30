import React, { useEffect } from "react";
import cn from "classnames";
import "./Search.scss";

const Search = () => {
  const wrapper = cn("search-wrapper-outer");
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className={wrapper}>
      <span></span>
    </div>
  );
};

export default Search;

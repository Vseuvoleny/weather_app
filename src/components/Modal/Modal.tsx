import React from "react";
import cn from "classnames";
import "./Modal.scss";
import { ReactSVG } from "react-svg";

const Modal = ({
  children,
  withCloseIcon = false,
  withOverlay = false,
  isOnBottom = false,
}: any) => {
  const modal = cn("modal");

  return (
    <div className={`${modal} ${isOnBottom ? "bottom" : "top"}`}>
      {withOverlay && <div className="overlay"></div>}
      <div className={`${modal}__wrapper`}>
        {withCloseIcon && <span>X</span>}
        {children}
      </div>
    </div>
  );
};

export default Modal;

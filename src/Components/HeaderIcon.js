import React from "react";
import icLibrary from "../Assets/ic_landing.png";
import { Link } from "react-router-dom";

const HeaderIcon = () => {
  return (
    <Link to="/home" className="link-noDec">
      {" "}
      <div className="row">
        <img src={icLibrary} alt="icon" />
        <h3 className="my-auto f-header" style={{ color: "#000000" }}>
          Lib'rary
        </h3>
      </div>
    </Link>
  );
};

export default HeaderIcon;

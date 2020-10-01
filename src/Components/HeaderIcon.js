import React from "react";
import icLibrary from "../Assets/ic_landing.png";

const HeaderIcon = () => {
  return (
    <div className="row">
      <img src={icLibrary} alt="icon" />
      <h3 className="my-auto f-header">Lib'rary</h3>
    </div>
  );
};

export default HeaderIcon;

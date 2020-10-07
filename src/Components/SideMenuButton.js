import React from "react";

const SideMenuButton = ({ icon, name, active, onClick }) => {
  return (
    <>
      <button
        className={
          active
            ? "text-left btn btn-outline-orange my-4 btn-block btn-nav-rounded active-btn"
            : "text-left btn btn-outline-orange my-4 btn-block btn-nav-rounded"
        }
        onClick={onClick}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;{icon}&nbsp;&nbsp;&nbsp;&nbsp;
        {name}
      </button>
    </>
  );
};

export default SideMenuButton;

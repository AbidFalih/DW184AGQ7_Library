import React from "react";
import icProfile from "../Assets/ic_profile.png";
import { BsPerson, BsPersonFill, BsBook, BsBookHalf } from "react-icons/bs";
import { GiBlackBook, GiWhiteBook } from "react-icons/gi";

const SideMenuButton = () => {
  const buttons = [
    {
      ic: <BsPerson />,
      name: "Profile",
    },
    {
      ic: <GiBlackBook />,
      name: "My Library",
    },
    {
      ic: <BsBook />,
      name: "Add Book",
    },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <button className="btn btn-outline-success my-4 btn-block">
          {button.ic}
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default SideMenuButton;

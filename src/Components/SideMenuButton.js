import React from "react";
import { BsPerson, BsBook } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { Link } from "react-router-dom";

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

  // let { path } = useLocation();

  function navigate(index) {
    switch (index) {
      case 0:
        return "/profile";
      case 1:
        return "/library";
      case 2:
        return "/addBook";
    }
  }
  return (
    <>
      {buttons.map((button, index) => (
        <Link to={navigate(index)} style={{ textDecoration: "none" }}>
          <button className="text-left btn btn-outline-orange my-4 btn-block btn-nav-rounded">
            &nbsp;&nbsp;&nbsp;&nbsp;{button.ic}&nbsp;&nbsp;&nbsp;&nbsp;
            {button.name}
          </button>
        </Link>
      ))}
    </>
  );
};

export default SideMenuButton;

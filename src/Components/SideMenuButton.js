import React from "react";
import { BsPerson, BsBook } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  function handleClick(e, index) {
    let parent = e.parentNode.children;
    console.log(index);
    console.log(e);
    for (let child of parent) {
      child.classList.remove("active-btn");
    }
    e.classList.add("active-btn");

    switch (index) {
      case 0:
        return history.push("/profile");
      case 1:
        return history.push("/library");
      case 2:
        return history.push("/addBook");
    }
  }

  return (
    <>
      {buttons.map((button, index) => (
        // <Link to={navigate(index)} style={{ textDecoration: "none" }}>
        <button
          className="text-left btn btn-outline-orange my-4 btn-block btn-nav-rounded"
          onClick={(e) => handleClick(e.target, index)}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;{button.ic}&nbsp;&nbsp;&nbsp;&nbsp;
          {button.name}
        </button>
        // </Link>
      ))}
    </>
  );
};

export default SideMenuButton;

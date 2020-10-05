import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import SideMenu from "../Components/SideMenu";
import MyLibrary from "./MyLibrary";
import FormAddBook from "../Components/FormAddBook";
import DetailBook from "./DetailBook";

const ContainerMember = (props) => {
  function navigate() {
    switch (props.title) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      case "library":
        return <MyLibrary />;
      case "addBook":
        return <FormAddBook />;
      case "detailBook":
        return <DetailBook />;
    }
  }
  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">{navigate()}</div>
    </div>
  );
};

export default ContainerMember;

import React from "react";
import SideMenu from "../Components/SideMenu";
import FormAddBook from "../Components/FormAddBook";

const AddBookMember = () => {
  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <FormAddBook />
      </div>
    </div>
  );
};

export default AddBookMember;

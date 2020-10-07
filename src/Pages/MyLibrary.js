import React from "react";
import Library from "../Components/Library";
import SideMenu from "../Components/SideMenu";

const MyLibrary = () => {
  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <div>
          <div className="d-flex justify-content-between my-3">
            <h3 className="fo-tnr">My Library</h3>
          </div>
          <Library />
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;

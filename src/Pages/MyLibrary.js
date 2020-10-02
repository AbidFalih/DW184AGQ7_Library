import React from "react";
import Library from "../Components/Library";

const MyLibrary = () => {
  return (
    <div>
      <div className="d-flex justify-content-between my-3">
        <h3 className="fo-tnr">My Library</h3>
      </div>
      <Library />
    </div>
  );
};

export default MyLibrary;

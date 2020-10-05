import React from "react";
import HeaderIcon from "../Components/HeaderIcon";
import { ReactReader } from "react-reader";

const ReadBook = () => {
  return (
    <div>
      <div className="mx-5 my-3">
        <HeaderIcon />
        <div style={{ position: "relative", height: "100vh" }}>
          {" "}
          <ReactReader
            url={require("../Assets/the_little_prince.epub")}
            title={"The Little Prince"}
            location={"epubcfi(/6/2[cover]!/6)"}
            locationChanged={(epubcifi) => console.log(epubcifi)}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadBook;

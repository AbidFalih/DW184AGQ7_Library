import React from "react";
import bkFixYou from "../Assets/book_fixYou.png";
import { FaLessThan } from "react-icons/fa";
import Library from "../Components/Library";
import SideMenu from "../Components/SideMenu";
import { Books } from "../Datas/Books";

const Home = () => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

  let dropdownItem = Books.map((book) => book.category)
    .filter(onlyUnique)
    .map((category) => {
      return (
        <a class="dropdown-item" href="#">
          {category}
        </a>
      );
    });

  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <div>
          <div className="bg-home half-page d-flex justify-content-around jumbotron p-0 my-3">
            <div className="my-auto">
              <h1 className="h1-home">
                Share, read
                <br />
                and <span className="font-italic">love</span>
              </h1>
              <p className="p1-home">Reading is fascinating</p>
            </div>
            <img src={bkFixYou} className="home-book my-auto" />
          </div>
          <div>
            <div className="d-flex justify-content-between my-3">
              <h3 className="fo-tnr">List Book</h3>
              <div className="dropdown dropleft">
                <button
                  className="btn btn-outline-orange btn-category"
                  data-toggle="dropdown"
                >
                  <FaLessThan /> Category
                </button>

                <div class="dropdown-menu">
                  {dropdownItem}
                  {/* <a class="dropdown-item" href="#">
                    Romance
                  </a>
                  <a class="dropdown-item" href="#">
                    Comedy
                  </a>
                  <a class="dropdown-item" href="#">
                    Sci-Fi
                  </a>
                  <a class="dropdown-item" href="#">
                    History
                  </a>
                  <a class="dropdown-item" href="#">
                    Documentary
                  </a> */}
                </div>
              </div>
            </div>
            <Library />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

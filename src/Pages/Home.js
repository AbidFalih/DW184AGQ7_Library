import React from "react";
import bkFixYou from "../Assets/book_fixYou.png";
import { FaLessThan } from "react-icons/fa";
import Library from "../Components/Library";

const Home = () => {
  return (
    <div>
      <div className="bg-home half-page d-flex justify-content-around">
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
            <button className="btn btn-outline-success" data-toggle="dropdown">
              <FaLessThan /> Category
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
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
              </a>
            </div>
          </div>
        </div>
        <Library />
      </div>
    </div>
  );
};

export default Home;

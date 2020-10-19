import React, { useState } from "react";
import bkFixYou from "../Assets/book_fixYou.png";
import { FaLessThan } from "react-icons/fa";
import Library from "../Components/Library";
import SideMenu from "../Components/SideMenu";
import { Books } from "../Datas/Books";
import { useQuery } from "react-query";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";

const Home = () => {
  const { isLoading, error, data: books } = useQuery("getBooks", () =>
    API.get("/books")
  );
  const {
    isLoading: isLoading2,
    error: error2,
    data: categories,
  } = useQuery("getCategories", () => API.get("/categories"));

  const [selectedCategory, setSelectedCategory] = useState("all");

  if (isLoading || isLoading2) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;
  if (error2) return "An error has occured: " + error2.message;

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

  let bookFound = false;

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
            <img
              src={bkFixYou}
              className="home-book my-auto"
              alt="jumbotron-book"
            />
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
                  <a
                    className="dropdown-item"
                    role="button"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All
                  </a>
                  {categories.data.categories.map((category) => (
                    <a
                      className="dropdown-item"
                      role="button"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              {books.data.books.map((book) => {
                if (
                  selectedCategory == "all" ||
                  book.category.name == selectedCategory
                ) {
                  bookFound = true;
                  return <Library book={book} />;
                }
              })}
              {!bookFound ? (
                <div className="container">
                  <p className="text-center">
                    Sorry, books with category{" "}
                    <strong>{selectedCategory}</strong> are not exist &#128532;
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

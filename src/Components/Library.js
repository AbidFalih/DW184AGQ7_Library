import React from "react";
import { Link } from "react-router-dom";

const Library = () => {
  // belum tahu cara import image selain dijadikan component (?), sedangkan component tidak bisa dimasukkan di books.thumb
  const books = [
    {
      thumb: require("../Assets/book_whatIf.png"),
      title: "What if? Absurd Question",
      author: "Randall Munroe",
    },
    {
      thumb: require("../Assets/book_glyph.png"),
      title: "Glyph: New look on Things",
      author: "Morris Williamson",
    },
    {
      thumb: require("../Assets/book_gobletOfFire.png"),
      title: "Harry Potter and Goblet of Fire",
      author: "J. K. Rownling",
    },
    {
      thumb: require("../Assets/book_tessOnTheRoad.png"),
      title: "Tess on the Road",
      author: "Rachel Hartman",
    },
  ];
  return (
    <div>
      <div className="card-deck mb-3">
        {books.map((book, index) => (
          <div className="card mx-5">
            <Link to="/detailBook" style={{ color: "#000000" }}>
              <img className="card-img-top" src={book.thumb} alt="book" />
              <div className="card-body pb-0">
                <h5>{book.title}</h5>
                <p>{book.author}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="row row-cols-4">
        {books.map((book) => (
          <div className="col">
            <img src={book.thumb} alt="book" />
            <br />
            <h5>{book.title}</h5>
            <p>{book.author}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Library;

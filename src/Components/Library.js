import React from "react";

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
    {
      thumb: require("../Assets/book_blockchain.png"),
      title: "Blockchain with Hyperledger",
      author: "Egi Ganteng",
    },
  ];
  return (
    <div className="container">
      <div className="row row-cols-4">
        {books.map((book) => (
          <div className="col">
            <img src={book.thumb} alt="book" />
            <br />
            <h5>{book.title}</h5>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

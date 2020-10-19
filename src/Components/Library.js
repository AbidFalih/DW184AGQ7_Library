import React from "react";
import { useHistory } from "react-router-dom";
import { Books } from "../Datas/Books";

const Library = ({ book }) => {
  // belum tahu cara import image selain diberikan require dlm array of object, sedangkan jika tidak memakai require image tdk bisa muncul
  const history = useHistory();

  return (
    <div className="col-sm-3 mb-4">
      <div
        role="button"
        className="card h-100 mx-1"
        onClick={() => history.push(`/detailBook/${book.id}`)}
      >
        <img
          className="card-img-top"
          src={book.thumb}
          // src="http://uploader.nusaserver.com/server/php/files/Thin-Book-3D-Template-Thin.jpg"
          alt="book"
          style={{ height: "270px" }}
        />
        <div className="card-body pb-0">
          <h6>{book.title}</h6>
          <p>{book.user.fullName}</p>
        </div>
      </div>

      {/* {Books.map((book, index) => (
          <div className="col-sm-3 mb-4">
            <div
              role="button"
              className="card h-100 mx-1"
              onClick={() => history.push(`/detailBook/${index}`)}
            >
              <img className="card-img-top" src={book.thumb} alt="book" />
              <div className="card-body pb-0">
                <h6>{book.title}</h6>
                <p>{book.author}</p>
              </div>
            </div>
          </div>
        ))} */}
    </div>

    // <div>
    //   <div className="card-deck mb-3">
    //     {Books.map((book, index) => (
    //       <div
    //         className="card mx-4"
    //         onClick={() => history.push(`/detailBook/${index}`)}
    //       >
    //         <img className="card-img-top" src={book.thumb} alt="book" />
    //         <div className="card-body pb-0">
    //           <h6>{book.title}</h6>
    //           <p>{book.author}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Library;

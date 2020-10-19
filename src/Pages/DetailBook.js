import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import SideMenu from "../Components/SideMenu";

import { useMutation, useQuery } from "react-query";
import { BookContext } from "../Context/bookContext";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";

const DetailBook = () => {
  const { bookId } = useParams();
  const [state, _] = useContext(BookContext);
  const userId = state.user.id;

  const [addToLibrary, setaddToLibrary] = useState(false);
  const [removeFromLibrary, setRemoveFromLibrary] = useState(false);

  const [storeBookmark] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ userId, bookId });
      const res = await API.post("/bookmark", body, config);

      refetch();
      return res;
    } catch (err) {
      console.log(err);
    }
  });

  const [deleteBookmark] = useMutation(async () => {
    try {
      const res = await API.delete(`/bookmark/${userId}/${bookId}`);
      refetch();
    } catch (err) {
      console.log(err);
    }
  });

  const {
    isLoading,
    error,
    data: bookmarked,
    refetch,
  } = useQuery("getABookmark", () => API.get(`bookmark/${userId}/${bookId}`));

  const {
    isLoading: isLoading2,
    error: error2,
    data: detailBook,
  } = useQuery("getDetailBook", () => API.get(`book/${bookId}`));

  if (isLoading || isLoading2) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;
  if (error2) return "An error has occured: " + error.message;

  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <div>
          <div className="half-page d-flex flex-row">
            <img
              className="img-detailB ml-4 p-3 my-auto"
              src={detailBook.data.book.thumb}
              alt="big-thumb"
            />
            <div className="d-flex flex-column justify-content-around py-4 mx-2">
              <div>
                <h1 className="mb-0 fo-tnr">{detailBook.data.book.title}</h1>
                <h6 className="mt-0 mb-4 text-muted font-weight-normal">
                  {detailBook.data.book.user.fullName}
                </h6>
              </div>

              <h6>
                Publication date
                <br />
                <small className="text-muted">
                  {detailBook.data.book.publication}
                </small>
              </h6>
              <h6>
                Category
                <br />
                <small className="text-muted">
                  {detailBook.data.book.category.name}
                </small>
              </h6>
              <h6>
                Pages
                <br />
                <small className="text-muted">
                  {detailBook.data.book.pages}
                </small>
              </h6>
              <h6>
                <span style={{ color: "#EE4622" }}>ISBN</span>
                <br />
                <small className="text-muted">
                  {detailBook.data.book.isbn}
                </small>
              </h6>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="mx-3">
            <h3 className="fo-tnr">About This Book</h3>
            <p className="text-justify">{detailBook.data.book.aboutBook}</p>
          </div>
          <Link to="/read">
            {" "}
            <button className="m-2 btn btn-grey float-right">
              Read Book <GrNext />
            </button>
          </Link>

          {bookmarked.data.selectedBook ? (
            <button
              className="m-2 btn btn-danger float-right"
              onClick={() => {
                setRemoveFromLibrary(true);
                deleteBookmark();
              }}
            >
              Remove from library <BsBookmark />
            </button>
          ) : (
            <button
              className="m-2 btn btn-orange float-right"
              onClick={() => {
                setaddToLibrary(true);
                storeBookmark();
              }}
            >
              Add library <BsBookmark />
            </button>
          )}

          <Modal
            show={addToLibrary}
            onHide={() => setaddToLibrary(false)}
            centered
          >
            <Modal.Body>
              <p className="text-success text-center pb-0 mb-0">
                Your book has been added successfully
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={removeFromLibrary}
            onHide={() => setRemoveFromLibrary(false)}
            centered
          >
            <Modal.Body>
              <p className="text-success text-center pb-0 mb-0">
                Book has been remove from your library
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;

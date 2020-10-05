import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BsBookmark } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const DetailBook = () => {
  const [addToLibrary, setaddToLibrary] = useState(false);

  const addToLibraryShow = () => setaddToLibrary(true);
  const addToLibraryClose = () => setaddToLibrary(false);
  return (
    <div>
      <div className="half-page d-flex flex-row">
        <img
          className="img-detailB ml-4 p-3 my-auto"
          src={require("../Assets/book_tessOnTheRoad_big.png")}
          alt="big-thumb"
        />
        <div className="d-flex flex-column justify-content-around py-4 mx-2">
          <div>
            <h1 className="mb-0 fo-tnr">Tess on the Road </h1>
            <h6 className="mt-0 mb-4 text-muted font-weight-normal">
              Rachel Hartman
            </h6>
          </div>

          <h6>
            Publication date
            <br />
            <small className="text-muted">April 2020</small>
          </h6>
          <h6>
            Category
            <br />
            <small className="text-muted">Sci-Fi</small>
          </h6>
          <h6>
            Pages
            <br />
            <small className="text-muted">436</small>
          </h6>
          <h6>
            <span style={{ color: "#EE4622" }}>ISBN</span>
            <br />
            <small className="text-muted">9781789807554</small>
          </h6>
        </div>
      </div>
      <hr className="mt-0" />
      <div className="mx-3">
        <h3 className="fo-tnr">About This Book</h3>
        <p className="text-justify">
          In the medieval kingdom of Goredd, women are expected to be ladies,
          men are their protectors, and dragons get to be whomever they want.
          Tess, stubbornly, is a troublemaker. You can’t make a scene at your
          sister’s wedding and break a relative’s nose with one punch (no matter
          how pompous he is) and not suffer the consequences. As her family
          plans to send her to a nunnery, Tess yanks on her boots and sets out
          on a journey across the Southlands, alone and pretending to be a boy.
        </p>

        <p className="text-justify">
          Where Tess is headed is a mystery, even to her. So when she runs into
          an old friend, it’s a stroke of luck. This friend is a quigutl—a
          subspecies of dragon—who gives her both a purpose and protection on
          the road. But Tess is guarding a troubling secret. Her tumultuous past
          is a heavy burden to carry, and the memories she’s tried to forget
          threaten to expose her to the world in more ways than one.
        </p>

        <p className="text-justify">
          Returning to the fascinating world she created in the award-winning
          and New York Times bestselling Seraphina, Rachel Hartman introduces
          readers to a new character and a new quest, pushing the boundaries of
          genre once again in this wholly original fantasy.
        </p>
      </div>
      <Link to="/read">
        {" "}
        <button className="m-2 btn btn-grey float-right">
          Read Book <GrNext />
        </button>
      </Link>

      <button
        className="m-2 btn btn-orange float-right"
        onClick={addToLibraryShow}
      >
        Add library <BsBookmark />
      </button>

      <Modal show={addToLibrary} onHide={addToLibraryClose} centered>
        <Modal.Body>
          <p className="text-success text-center pb-0 mb-0">
            Your book has been added successfully
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DetailBook;

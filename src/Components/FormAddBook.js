import React, { useContext, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { BookContext } from "../Context/bookContext";
import { useHistory } from "react-router-dom";

const FormAddBook = () => {
  const [addBook, setaddBook] = useState(false);
  const [state] = useContext(BookContext);

  const history = useHistory();

  return (
    <div>
      <div className="my-3">
        <h3 className="fo-tnr">Add Book</h3>
        <form className="my-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            class="form-control my-4"
            id="title"
            placeholder="Title"
          />
          <input
            class="form-control"
            type="date"
            id="publicationDate"
            placeholder="Publication Date"
          />
          <select className="custom-select my-4">
            <option value="" disable selected hidden>
              Category
            </option>
            <option value="romance">Romance</option>
            <option value="comedy">Comedy</option>
            <option value="scifi">Sci-Fi</option>
            <option value="history">History</option>
            <option value="documentary">Documentary</option>
          </select>
          <input
            class="form-control"
            type="number"
            id="pages"
            placeholder="Pages"
          />
          <input
            type="text"
            class="form-control my-4"
            id="isbn"
            placeholder="ISBN"
          />
          <textarea
            class="form-control"
            id="about"
            rows="4"
            placeholder="About This Book"
          ></textarea>
          <button class="btn btn-grey d-block my-4 p-2">
            Attache Book File &nbsp;&nbsp;
            <CgAttachment style={{ verticalAlign: "baseline" }} />
          </button>
          <button
            className="btn btn-orange float-right p-2"
            onClick={() => setaddBook(true)}
          >
            Add Book&nbsp;&nbsp;
            <BsBook style={{ verticalAlign: "baseline" }} />
          </button>
        </form>

        <Modal
          show={addBook}
          onHide={() => {
            setaddBook(false);
            if (state.isAdmin) history.push("/admin");
          }}
          centered
        >
          <Modal.Body>
            <p className="text-success text-center">
              Thank you for adding your own book to our website, please
              <br />
              wait 1 x 24 hours to verify whether this book is your writing
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default FormAddBook;

import React, { useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { Modal } from "react-bootstrap";

const FormAddBook = () => {
  const [addBook, setaddBook] = useState(false);
  const [addBookAdmin, setaddBookAdmin] = useState(false);

  const addBookShow = () => setaddBook(true);
  const addBookClose = () => setaddBook(false);

  const addBookAdminShow = () => setaddBookAdmin(true);
  const addBookAdminClose = () => setaddBookAdmin(false);

  return (
    <div>
      <h3>Add Book</h3>
      <form>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Title"
        />
        <input
          class="form-control"
          type="date"
          id="publicationDate"
          placeholder="Publication Date"
        />
        <input
          type="text"
          class="form-control"
          id="category"
          placeholder="Category"
        />
        <input
          class="form-control"
          type="number"
          id="pages"
          placeholder="Pages"
        />
        <input type="text" class="form-control" id="isbn" placeholder="ISBN" />
        <textarea
          class="form-control"
          id="about"
          rows="3"
          placeholder="About This Book"
        ></textarea>
        <button type="submit" class="btn btn-grey d-block">
          Attache Book File <CgAttachment />
        </button>
        <button className="btn btn-orange float-right" onClick={addBookShow}>
          Add Book <BsBook />
        </button>
      </form>

      <Modal show={addBookAdmin} onHide={addBookAdminClose}>
        <Modal.Body>
          <p className="text-success text-center">
            Your book has been added successfully
          </p>
        </Modal.Body>
      </Modal>

      <Modal show={addBook} onHide={addBookClose}>
        <Modal.Body>
          <p className="text-success text-center">
            Thank you for adding your own book to our website, please
            <br />
            wait 1 x 24 hours to verify whether this book is your writing
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormAddBook;

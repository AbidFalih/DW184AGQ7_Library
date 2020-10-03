import React from "react";
import { CgAttachment } from "react-icons/cg";
import { BsBook } from "react-icons/bs";

const FormAddBook = () => {
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
        <button className="btn btn-orange float-right">
          Add Book <BsBook />
        </button>
      </form>
    </div>
  );
};

export default FormAddBook;

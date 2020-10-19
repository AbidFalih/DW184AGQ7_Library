import React, { useContext, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import { BookContext } from "../Context/bookContext";
import { useHistory } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";

const FormAddBook = () => {
  const [addBook, setaddBook] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    publication: "",
    categoryId: "",
    pages: "",
    isbn: "",
    aboutBook: "",
    thumb: "",
    file: "",
  });

  let {
    title,
    publication,
    categoryId,
    pages,
    isbn,
    aboutBook,
    thumb,
    file,
  } = formData;

  const [state] = useContext(BookContext);
  const userId = state.user.id;
  console.log(`ini userId: ${userId}`);

  const history = useHistory();

  const [storeBook] = useMutation(async () => {
    try {
      if (thumb == "")
        thumb =
          "http://uploader.nusaserver.com/server/php/files/Thin-Book-3D-Template-Thin.jpg";

      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const body = JSON.stringify({
        title,
        thumb,
        publication,
        categoryId,
        userId,
        pages,
        isbn,
        aboutBook,
        file,
      });
      const res = await API.post("/book", body, config);

      setFormData({
        title: "",
        publication: "",
        categoryId: "",
        pages: "",
        isbn: "",
        aboutBook: "",
        thumb: "",
        file: "",
      });

      return res;
    } catch (err) {
      alert(`Error creating book: ${err}`);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    storeBook();
  };

  const { isLoading, error, data: categories } = useQuery("getCategories", () =>
    API.get("/categories")
  );

  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div>
      <div className="my-3">
        <h3 className="fo-tnr">Add Book</h3>
        <form className="my-5" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            class="form-control my-4"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
            }}
          />
          <input
            type="text"
            class="form-control my-4"
            id="thumb"
            placeholder="Put your image URL for book cover"
            value={thumb}
            onChange={(e) => {
              setFormData({ ...formData, thumb: e.target.value });
            }}
          />
          <input
            class="form-control"
            type="date"
            id="publicationDate"
            placeholder="Publication Date"
            value={publication}
            onChange={(e) => {
              setFormData({ ...formData, publication: e.target.value });
            }}
          />
          <select
            className="custom-select my-4"
            value={categoryId}
            onChange={(e) => {
              setFormData({ ...formData, categoryId: e.target.value });
            }}
          >
            <option value="" disable selected hidden>
              Category
            </option>
            {categories.data.categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
          <input
            class="form-control"
            type="number"
            id="pages"
            placeholder="Pages"
            value={pages}
            onChange={(e) => {
              setFormData({ ...formData, pages: e.target.value });
            }}
          />
          <input
            type="text"
            class="form-control my-4"
            id="isbn"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => {
              setFormData({ ...formData, isbn: e.target.value });
            }}
          />
          <textarea
            class="form-control"
            id="about"
            rows="4"
            placeholder="About This Book"
            value={aboutBook}
            onChange={(e) => {
              setFormData({ ...formData, aboutBook: e.target.value });
            }}
          ></textarea>
          <input
            type="text"
            class="form-control my-4"
            id="file"
            placeholder="Put your book URL for book file"
            value={file}
            onChange={(e) => {
              setFormData({ ...formData, file: e.target.value });
            }}
          />
          {/* <button class="btn btn-grey d-block my-4 p-2">
            Attache Book File &nbsp;&nbsp;
            <CgAttachment style={{ verticalAlign: "baseline" }} />
          </button> */}
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

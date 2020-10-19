import React, { useState, useContext } from "react";
import HeaderIcon from "../Components/HeaderIcon";
import { FaCheckCircle } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BookContext } from "../Context/bookContext";
import { useQuery, useMutation } from "react-query";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";

const BookVerification = () => {
  const [, dispatch] = useContext(BookContext);
  const [status, setStatus] = useState("");
  const [bookId, setBookId] = useState(null);

  const [patchBook] = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ status });
      const res = await API.patch(`/book/${bookId}`, body, config);

      refetch();
      return res;
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });

  const { isLoading, error, data: books, refetch } = useQuery("getBooks", () =>
    API.get("/books")
  );

  const handleAcc = async (idBook) => {
    await setStatus("Approved");
    await setBookId(idBook);
    patchBook();
  };

  if (isLoading) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="mx-5 my-3">
      <div className="d-flex flex-column">
        <div className="mb-5">
          <div className="float-left">
            <HeaderIcon />
          </div>
          <div className="dropdown" style={{ cursor: "pointer" }}>
            <img
              src={require("../Assets/chloe-grace-moretz.jpg")}
              class="rounded-circle mx-auto d-block img-profile-admin float-right"
              alt="chloe"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu">
              <Link class="dropdown-item" to="/adminAddBook">
                <BsBook />
                &nbsp;&nbsp;&nbsp;Add Book
              </Link>
              <Link
                class="dropdown-item"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                <RiLogoutBoxLine style={{ color: "red" }} />
                &nbsp;&nbsp;&nbsp;Logout
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className="fo-tnr">Book Verification</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Users or Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">E-book</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.data.books.map((book) => (
                <tr>
                  <td>{book.id}</td>
                  <td>{book.user.fullName}</td>
                  <td>{book.isbn}</td>
                  <td>{book.file}</td>
                  <td>{book.status}</td>
                  {book.status == "Approved" ? (
                    <td>
                      <FaCheckCircle
                        style={{ color: "green" }}
                        className="ml-5"
                      />
                    </td>
                  ) : (
                    <td>
                      <button className="btn btn-danger">Cancel</button>{" "}
                      <button
                        className="btn btn-success"
                        onClick={() => handleAcc(book.id)}
                      >
                        Approve
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookVerification;

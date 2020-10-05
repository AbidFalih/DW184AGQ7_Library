import React from "react";
import HeaderIcon from "../Components/HeaderIcon";
import { FaCheckCircle } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookVerification = () => {
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
              <Link class="dropdown-item" to="/">
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
              <tr>
                <td>1</td>
                <td>Randall Munroe</td>
                <td>9781789807554</td>
                <td>What If? Absurd Question.pdf</td>
                <td className="text-success">Approve</td>
                <td>
                  <FaCheckCircle style={{ color: "green" }} className="ml-5" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Morris Willimson</td>
                <td>978178907555</td>
                <td>Glyph.pdf</td>
                <td className="text-success">Approve</td>
                <td>
                  <FaCheckCircle style={{ color: "green" }} className="ml-5" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>J.K. Rownling</td>
                <td>9781789807666</td>
                <td>Harry Potter.pdf</td>
                <td className="text-danger">Cancel</td>
                <td>
                  <button className="btn btn-danger">Cancel</button>{" "}
                  <button className="btn btn-success">Approve</button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Rachel Hartman</td>
                <td>9781789807576</td>
                <td>tessonroad.jpg</td>
                <td className="text-warning">Waiting to be verified</td>
                <td>
                  <button className="btn btn-danger">Cancel</button>{" "}
                  <button className="btn btn-success">Approve</button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Aziz Oni On</td>
                <td>9781789807709</td>
                <td>7ds.jpg</td>
                <td className="text-warning">Waiting to be verified</td>
                <td>
                  <button className="btn btn-danger">Cancel</button>{" "}
                  <button className="btn btn-success">Approve</button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Sugeng No Pants</td>
                <td>9781789807000</td>
                <td>fixyou.jpg</td>
                <td className="text-warning">Waiting to be verified</td>
                <td>
                  <button className="btn btn-danger">Cancel</button>{" "}
                  <button className="btn btn-success">Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookVerification;

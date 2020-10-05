import React, { useState, useContext } from "react";
import "../App.css";
import HeaderIcon from "../Components/HeaderIcon";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookContext } from "../Context/bookContext";

function Landing() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const signInShow = () => setSignIn(true);
  const signInClose = () => setSignIn(false);

  const signUpShow = () => setSignUp(true);
  const signUpClose = () => setSignUp(false);

  // const [formData, setFormData] = useState({
  //   email: "asdas",
  //   password: "asdad",
  // });
  // const { emailfd, passwordfd } = formData;

  // let history = useHistory();

  // const [state, dispatch] = useContext(BookContext);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch({
  //     type: "LOGIN",
  //   });
  //   history.push("/home");
  // };

  return (
    <div id="bg-landing">
      <div className="container pt-3 ml-5 h-100">
        <HeaderIcon />
        <div className="row" style={{ height: "85vh" }}>
          <div className="my-auto">
            <h1 className="font-weight-bolder h1-landing">
              <span className="font-italic">Your</span> library
              <br />
              anywhere
            </h1>

            <p className="mt-5 mb-4">
              Sign-up today and receive unlimited
              <br />
              access to all of your reading - share
              <br />
              your book
            </p>

            <button className="btn btn-orange" onClick={signUpShow}>
              Sign Up
            </button>
            <button className="btn btn-grey mx-5" onClick={signInShow}>
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Modal SignIn */}
      <Modal show={signIn} onHide={signInClose} centered>
        <Modal.Header>
          <Modal.Title className="font-weight-bolder">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {/* onSubmit={(e) => handleSubmit(e)} */}
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              class="form-control my-2"
              id="password"
              placeholder="Password"
            />
            <Link to="/home" style={{ textDecoration: "none" }}>
              <button type="submit" class="btn btn-orange btn-block my-3">
                Sign In
              </button>
            </Link>
          </form>

          <p className="text-center">
            Don't have account? Click{" "}
            <span
              className="font-weight-bold"
              role="button"
              onClick={() => {
                setSignIn(false);
                setSignUp(true);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>

      {/* Modal SignUp */}
      <Modal show={signUp} onHide={signUpClose} centered>
        <Modal.Header>
          <Modal.Title className="font-weight-bolder">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              class="form-control my-2"
              id="password"
              placeholder="Password"
            />
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
            />
            <select className="custom-select my-2">
              <option value="" disable selected hidden>
                Gender
              </option>
              <option value="0">Man</option>
              <option value="1">Woman</option>
            </select>
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="Phone"
            />
            <input
              type="text"
              class="form-control my-2"
              id="address"
              placeholder="Address"
            />
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <button type="submit" class="btn btn-orange btn-block my-3">
                Sign Up
              </button>
            </Link>
          </form>

          <p className="text-center">
            Already have an account? Click{" "}
            <span
              className="font-weight-bold"
              role="button"
              onClick={() => {
                setSignIn(true);
                setSignUp(false);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Landing;

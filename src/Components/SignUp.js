import React from "react";
import { Modal } from "react-bootstrap";

const SignUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <button type="submit" class="btn btn-orange btn-block my-3">
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Already have an account? Click{" "}
          <span
            className="font-weight-bold"
            role="button"
            onClick={props.hasAcc}
          >
            Here
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;

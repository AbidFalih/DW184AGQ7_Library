import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BookContext } from "../Context/bookContext";
import Users from "../Datas/Users.json";

const SignIn = (props) => {
  const [, dispatch] = useContext(BookContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Users.map((user) => {
      if (email === user.email && password === user.pass) {
        dispatch({
          type: "LOGIN",
        });
        if (user.admin) {
          dispatch({
            type: "ADMIN",
          });
          return history.push("/admin");
        }
        return history.push("/home");
      }
    });
  };

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <input
            type="password"
            class="form-control my-2"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <button type="submit" class="btn btn-orange btn-block my-3">
            Sign In
          </button>
        </form>

        <p className="text-center">
          Don't have account? Click{" "}
          <span
            className="font-weight-bold"
            role="button"
            onClick={props.noAcc}
          >
            Here
          </span>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default SignIn;

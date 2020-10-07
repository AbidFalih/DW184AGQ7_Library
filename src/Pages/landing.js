import React, { useState } from "react";
import "../App.css";
import HeaderIcon from "../Components/HeaderIcon";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

function Landing() {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div id="bg-landing">
      <div className="container pt-3 ml-5 h-100">
        <HeaderIcon />
        <div className="row" style={{ height: "85vh" }}>
          <div className="my-auto">
            <h1 className="font-weight-bolder display-2 h1-landing">
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

            <button className="btn btn-orange" onClick={() => setSignUp(true)}>
              Sign Up
            </button>
            <button
              className="btn btn-grey mx-5"
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <SignIn
        show={signIn}
        onHide={() => setSignIn(false)}
        noAcc={() => {
          setSignIn(false);
          setSignUp(true);
        }}
      />

      <SignUp
        show={signUp}
        onHide={() => setSignUp(false)}
        hasAcc={() => {
          setSignUp(false);
          setSignIn(true);
        }}
      />
    </div>
  );
}

export default Landing;

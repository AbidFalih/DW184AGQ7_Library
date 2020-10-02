import React from "react";
import Library from "../Components/Library";

const Profile = () => {
  return (
    <div>
      <div className="half-page d-flex flex-column">
        <h3 className="fo-tnr">Profile</h3>
        <div className="jumbotron p-0 my-2 d-flex bg-profile">
          <div className="m-2 flex-grow-1 my-auto">
            <div class="d-flex justify-content-start">
              <img
                className="my-auto"
                src={require("../Assets/ic_mail.png")}
                alt="ic-mail"
              />
              <p className="m-1 font-weight-bold">
                chloegracemoretz@gmail.com
                <br />
                <small className="text-muted">Email</small>
              </p>
            </div>
            <div class="d-flex justify-content-start">
              <img
                className="my-auto"
                src={require("../Assets/ic_gender.png")}
                alt="ic-mail"
              />
              <p className="m-1 font-weight-bold">
                Female
                <br />
                <small className="text-muted">Gender</small>
              </p>
            </div>
            <div class="d-flex justify-content-start">
              <img
                className="my-auto"
                src={require("../Assets/ic_phone.png")}
                alt="ic-mail"
              />
              <p className="m-1 font-weight-bold">
                0896-9876-5432
                <br />
                <small className="text-muted">Mobile Phone</small>
              </p>
            </div>
            <div class="d-flex justify-content-start">
              <img
                className="my-auto"
                src={require("../Assets/ic_map.png")}
                alt="ic-mail"
              />
              <p className="m-1 font-weight-bold">
                Kabupaten Malang Jawa timur
                <br />
                <small className="text-muted">Address</small>
              </p>
            </div>
          </div>
          <div className="m-2 d-flex flex-column">
            <img
              className="img-profile-big"
              src={require("../Assets/chloe-grace-moretz.jpg")}
              alt="profil-photo"
            />
            <button className="btn btn-orange mx-auto mt-2">
              Change Photo Profile
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="fo-tnr">My Books</h3>
        <Library />
      </div>
    </div>
  );
};

export default Profile;

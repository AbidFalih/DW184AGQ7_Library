import React, { useState, useContext } from "react";
import Library from "../Components/Library";
import SideMenu from "../Components/SideMenu";
import { useQuery } from "react-query";
import { API } from "../Config/api";
import { BoxLoading } from "react-loadingg";
import { BookContext } from "../Context/bookContext";
import ChangePP from "../Components/ChangePP";

const Profile = () => {
  const [changePP, setChangePP] = useState(false);
  const [state, _] = useContext(BookContext);

  const { isLoading, error, data: books } = useQuery("getBooks", () =>
    API.get("/books")
  );

  const { isLoading: isLoading2, error: error2, data, refetch } = useQuery(
    "getUser",
    () => API.get(`/user/${state.user.id}`)
  );

  if (isLoading || isLoading2) return <BoxLoading />;
  if (error) return "An error has occured: " + error.message;
  if (error2) return "An error2 has occured: " + error2.message;

  return (
    <div class="mx-5 my-2 d-flex bd-highlight">
      <div class="p-2 bd-highlight">
        <SideMenu />
      </div>
      <div class="p-2 flex-grow-1 bd-highlight">
        <div className="d-flex flex-column">
          <div className="half-page d-flex flex-column my-3">
            <h3 className="fo-tnr">Profile</h3>
            <div className="jumbotron p-0 py-4 px-5 d-flex bg-profile">
              <div className="flex-grow-1 my-auto">
                <div class="d-flex justify-content-start">
                  <img
                    className="my-auto"
                    src={require("../Assets/ic_mail.png")}
                    alt="ic-mail"
                  />
                  <p className="m-1 ml-3 font-weight-bold">
                    {data.data.user.email}
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
                  <p className="m-1 ml-3 font-weight-bold">
                    {data.data.user.gender ? "Female" : "Male"}
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
                  <p className="m-1 ml-3 font-weight-bold">
                    {data.data.user.phone}
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
                  <p className="m-1 ml-3 font-weight-bold">
                    {data.data.user.address}
                    <br />
                    <small className="text-muted">Address</small>
                  </p>
                </div>
              </div>
              <div className="m-2 d-flex flex-column">
                <img
                  className="img-profile-big"
                  src={data.data.user.thumb}
                  alt="big-chloe"
                />
                <button
                  className="btn btn-block btn-orange mx-auto mt-2"
                  onClick={() => setChangePP(true)}
                >
                  Change Photo Profile
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h3 className="fo-tnr my-3">My Books</h3>
            <div className="row mb-3">
              {books.data.books.map((book) =>
                book.user.id == state.user.id ? <Library book={book} /> : ""
              )}
            </div>
          </div>
        </div>
      </div>
      <ChangePP show={changePP} onHide={() => setChangePP(false)} refetch={()=>refetch()} />
    </div>
  );
};

export default Profile;

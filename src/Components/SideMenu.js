import React, { useContext } from "react";
import HeaderIcon from "./HeaderIcon";
import SideMenuButton from "./SideMenuButton";
import ChloeGM from "../Assets/chloe-grace-moretz.jpg";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BookContext } from "../Context/bookContext";

const SideMenu = () => {
  const [state, dispatch] = useContext(BookContext);

  return (
    <div className="container pt-3 full-page">
      <HeaderIcon />
      <>
        <img
          src={ChloeGM}
          class="rounded-circle mx-auto d-block img-profile mt-4 mb-4"
          alt="chloe"
        />
        <h5 className="text-center mb-4">
          Chloë Grace Moretz <span className="font-weight-normal">:D</span>
        </h5>

        <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 1,
            width: 210,
          }}
        />
        <SideMenuButton />
        <hr
          className="my-4"
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 1,
            width: 210,
          }}
        />

        <Link to="/" className="link-noDec">
          <button className="text-left btn btn-outline-orange my-4 btn-block btn-nav-rounded">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <RiLogoutBoxLine />
            &nbsp;&nbsp;&nbsp;&nbsp; Logout
          </button>
        </Link>
      </>
    </div>
  );
};

export default SideMenu;

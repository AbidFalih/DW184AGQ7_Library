import React from "react";
import HeaderIcon from "./HeaderIcon";
import SideMenuButton from "./SideMenuButton";
import ChloeGM from "../Assets/chloe-grace-moretz.jpg";
import { RiLogoutBoxLine, RiLogoutBoxFill } from "react-icons/ri";

const SideMenu = () => {
  return (
    <div className="container pl-5 full-page">
      <HeaderIcon />
      <div>
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
          }}
        />

        <SideMenuButton />

        <hr
          className="my-4"
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 1,
          }}
        />

        <button className="btn btn-outline-success my-4 btn-block">
          <RiLogoutBoxLine />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideMenu;

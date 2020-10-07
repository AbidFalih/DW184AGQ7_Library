import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { BookContext } from "../Context/bookContext";
import HeaderIcon from "./HeaderIcon";
import SideMenuButton from "./SideMenuButton";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsPerson, BsBook } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import ChloeGM from "../Assets/chloe-grace-moretz.jpg";

const SideMenu = () => {
  const [, dispatch] = useContext(BookContext);

  const history = useHistory();
  let path = ["/profile", "/library", "/addBook"];

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
        <SideMenuButton
          icon={<BsPerson />}
          name="Profile"
          active={useRouteMatch(path[0])} //jika benar, akan mengembalikan object == true
          onClick={() => history.push(path[0])}
        />
        <SideMenuButton
          icon={<GiBlackBook />}
          name="My Library"
          active={useRouteMatch(path[1])}
          onClick={() => history.push(path[1])}
        />
        <SideMenuButton
          icon={<BsBook />}
          name="Add Book"
          active={useRouteMatch(path[2])}
          onClick={() => history.push(path[2])}
        />
        <hr
          className="my-4"
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 1,
            width: 210,
          }}
        />

        <SideMenuButton
          icon={<RiLogoutBoxLine />}
          name="Logout"
          onClick={() => dispatch({ type: "LOGOUT" })}
        />
      </>
    </div>
  );
};

export default SideMenu;

import React from "react";
import "./App.css";
import Landing from "./Pages/landing";
import SideMenu from "./Components/SideMenu";
import Home from "./Pages/Home";
import MyLibrary from "./Pages/MyLibrary";
import Profile from "./Pages/Profile";
import DetailBook from "./Pages/DetailBook";
import FormAddBook from "./Components/FormAddBook";

function App() {
  return (
    <div>
      <Landing />

      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <SideMenu />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <Home />
        </div>
      </div>

      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <SideMenu />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <MyLibrary />
        </div>
      </div>

      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <SideMenu />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <Profile />
        </div>
      </div>

      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <SideMenu />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <DetailBook />
        </div>
      </div>

      <div class="d-flex bd-highlight">
        <div class="p-2 bd-highlight">
          <SideMenu />
        </div>
        <div class="p-2 flex-grow-1 bd-highlight">
          <FormAddBook />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PrivateRoute, AdminRoute } from "./Components/PrivateRoute";

//pages
import Landing from "./Pages/landing";
import BookVerification from "./Pages/BookVerification";
import ReadBook from "./Pages/ReadBook";
import AddBookAdmin from "./Pages/AddBookAdmin";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import MyLibrary from "./Pages/MyLibrary";
import AddBookMember from "./Pages/AddBookMember";
import DetailBook from "./Pages/DetailBook";

import { API, setAuthToken } from "./Config/api";

import { BookContext } from "./Context/bookContext";

//if token available
if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  const [state, dispatch] = useContext(BookContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.user,
        });
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    };

    loadUser();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/library" component={MyLibrary} />
        <PrivateRoute exact path="/addBook" component={AddBookMember} />
        <PrivateRoute exact path="/detailBook/:id" component={DetailBook} />
        <PrivateRoute exact path="/read" component={ReadBook} />
        <AdminRoute exact path="/admin" component={BookVerification} />
        <AdminRoute exact path="/adminAddBook" component={AddBookAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

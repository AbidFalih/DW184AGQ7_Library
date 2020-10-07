import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BookContextProvider } from "./Context/bookContext";
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

function App() {
  return (
    <BookContextProvider>
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
    </BookContextProvider>
  );
}

export default App;

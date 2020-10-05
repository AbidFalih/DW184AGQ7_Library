import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Pages/landing";
import BookVerification from "./Pages/BookVerification";
import ContainerMember from "./Pages/ContainerMember";
import ReadBook from "./Pages/ReadBook";
import AddBookAdmin from "./Pages/AddBookAdmin";
import { BookContextProvider } from "./Context/bookContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/home"
            render={(props) => <ContainerMember {...props} title="home" />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <ContainerMember {...props} title="profile" />}
          />
          <Route
            exact
            path="/library"
            render={(props) => <ContainerMember {...props} title="library" />}
          />
          <Route
            exact
            path="/addBook"
            render={(props) => <ContainerMember {...props} title="addBook" />}
          />
          <Route
            exact
            path="/detailBook"
            render={(props) => (
              <ContainerMember {...props} title="detailBook" />
            )}
          />
          <Route exact path="/read" component={ReadBook} />
          <Route exact path="/admin" component={BookVerification} />
          <Route exact path="/adminAddBook" component={AddBookAdmin} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
}

export default App;

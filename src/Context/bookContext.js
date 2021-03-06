import React, { createContext, useReducer } from "react";

export const BookContext = createContext();

const initialState = {
  books: [],
  isLogin: false,
  isAdmin: false || localStorage.getItem("isAdmin"),
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        loading: false,
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
      return {
        ...state,
        isLogin: false,
        user: null,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLogin: true,
        loading: false,
      };
    // case "LOGIN":
    //   localStorage.setItem("isLogin", true);
    //   return {
    //     ...state,
    //     isLogin: true,
    //   };
    case "ADMIN":
      localStorage.setItem("isAdmin", true);
      return {
        ...state,
        isAdmin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        user: null,
      };
    default:
      throw new Error();
  }
};

export const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookContext.Provider>
  );
};

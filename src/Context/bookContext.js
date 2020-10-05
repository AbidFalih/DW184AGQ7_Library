import React, { createContext, useReducer } from "react";

export const BookContext = createContext();

const initialState = {
  books: [],
  isLogin: false || localStorage.getItem("isLogin"),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogin", true);
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      localStorage.removeItem("isLogin");
      return {
        ...state,
        isLogin: false,
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

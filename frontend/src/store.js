import { act } from "react-dom/test-utils";
import { createSelectorHook, createStoreHook } from "react-redux";
import { legacy_createStore } from "redux";
const initialstate = {
  isloggedin: false,
  email: "",
  password: "",
  items:[],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state, "called", action);
      return {
        ...state,
        loggedin: true,
        email: action.email,
        password: action.password,
      };
    case "LOGOUT":
      console.log(state, "");
      return { ...state, loggedin: false, email: "", password: "" };
     
    case "ADD_TO_CART":
        // return {
        //     ...state,items:[...items,action.payload.item]
        // }  
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;

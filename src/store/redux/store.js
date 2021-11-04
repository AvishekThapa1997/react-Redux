import cartReducer from "./cartReducer";
import { createStore, combineReducers } from "redux";
const store = createStore(
  combineReducers({
    cart: cartReducer,
  })
);
export default store;

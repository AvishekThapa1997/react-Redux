import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { authReducers } from "./authStore";
const counterSlice = createSlice({
  name: "counter-slice",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCounter(state) {
      ++state.counter;
    },
    incrementCountByFive(state, action) {
      state.counter += action.payload; // payload keyword is predefined
    },
    decrementCounter(state) {
      if (state.counter === 0) state.counter = 0;
      else --state.counter;
    },
    decrementCounterByFive(state, action) {
      if (state.counter === 0 || state.counter <= +action.payload)
        state.counter = 0;
      else state.counter -= +action.payload;
    },
  },
});
const visibilitySlicer = createSlice({
  name: "visibility-slice",
  initialState: {
    visibility: true,
  },
  reducers: {
    changeVisibility(state) {
      state.visibility = !state.visibility;
    },
  },
});
//==============================================================================
// THIS IS ALL FOR SIMPLE REDUX
// const defaultState = {
//   counter: 0,
//   counterVisibility: true,
// };
// const counterReducer = (prevState = defaultState, action) => {
//   switch (action.type) {
//     case "increment": {
//       return {
//         counter: ++prevState.counter,
//         counterVisibility: prevState.counterVisibility,
//       };
//     }
//     case "decrement": {
//       return {
//         counter: prevState.counter !== 0 ? --prevState.counter : 0,
//         counterVisibility: prevState.counterVisibility,
//       };
//     }
//     case "counter-visibility": {
//       return {
//         counter: prevState.counter,
//         counterVisibility: !prevState.counterVisibility,
//       };
//     }
//     default: {
//       return prevState;
//     }
//   }
// };
//const store = createStore(counterReducer) // We can also use combineReducer()
//===================================================================================
//const store = createStore(counterSlice.reducer); // We can do like this
//Or can use configureStore() from redux toolkit
// const store = configureStore({ reducer: counterSlice.reducer });
// We can also pass multiple reducer as object
const store = configureStore({
  // This combines all the reducer into a single reducer internally
  reducer: {
    counter: counterSlice.reducer,
    visibility: visibilitySlicer.reducer,
    auth : authReducers
  },
});
export default store;
export const counterActions = counterSlice.actions;
export const visibilityActions = visibilitySlicer.actions;

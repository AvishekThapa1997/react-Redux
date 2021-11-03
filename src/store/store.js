import { createStore } from "redux";
const defaultState = {
  counter: 0,
  counterVisibility: true,
};
const counterReducer = (prevState = defaultState, action) => {
  switch (action.type) {
    case "increment": {
      return {
        counter: ++prevState.counter,
        counterVisibility : prevState.counterVisibility
      };
    }
    case "decrement": {
      return {
        counter: prevState.counter !== 0 ? --prevState.counter : 0,
        counterVisibility : prevState.counterVisibility
      };
    }
    case "counter-visibility": {
      return {
        counter: prevState.counter,
        counterVisibility: !prevState.counterVisibility,
      };
    }
    default: {
      return prevState;
    }
  }
};

const store = createStore(counterReducer);

export default store;

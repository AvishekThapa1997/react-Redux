# react-Redux

Redux is a <strong>state management system </strong> for <strong>cross - component or app - wide state<strong>

<strong>Redux is one central place where all the data(state) is stored</strong>

<strong>Components subscribe to those state to get access</strong>

<strong>Components never directly don't change the state.Component uses reducer function 
<span style = {color : red;}>(Not React useReducer() function)<span> to manipulate the data 
<span style = {color : red;}> i.e. there is uni-directional flow of data between central state and components<span><strong>

## Create Central State

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

### Using It in Component
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, counterVisibility : isVisible} = useSelector((state) => {
    // return { counter: state.counter, isVisbile: state.counterVisibility }
    return state;
  });
  const toggleCounterHandler = () => {
    dispatch({
      type: "counter-visibility",
    });
  };
  const incrementHandler = (event) => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = (event) => {
    dispatch({ type: "decrement" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { isVisible && <div className={ classes.value }>{ counter }</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

<strong>useSelector() help us to get chunks of state or whole state also</strong>
<strong>useDispatch() get us the dispatch access</strong>
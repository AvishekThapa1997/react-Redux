import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions, visibilityActions } from "../store/store";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, visibility } = useSelector((state) => {
    // return { counter: state.counter, isVisbile: state.counterVisibility }
    return state;
  });
  const toggleCounterHandler = () => {
    dispatch(visibilityActions.changeVisibility());
  };
  const incrementHandler = (event) => {
    dispatch(counterActions.incrementCounter()); // calling incrementCounter(),internally will create a object with type like {type : ....}
  };
  const decrementHandler = (event) => {
    dispatch(counterActions.decrementCounter());
  };
  const incrementByfive = (event) => {
    dispatch(counterActions.incrementCountByFive(5)); // calling incrementCounter(),internally will create a object with type like {type : ....,paylod : 5} payload keyword is predefined
  };
  const decrementByFive = (event) => {
    dispatch(counterActions.decrementCounterByFive(5)); // calling incrementCounter(),internally will create a object with type like {type : ....,paylod : 5} payload keyword is predefined
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visibility.visibility && (
        <div className={classes.value}>{counter.counter}</div>
      )}
      {/* This is done because we have passed multiple reducer in configure store so we are using that particular key for the particular slice  
          For Example In store.js,while configureStore() we have pass counter for counter slicer so we are accessing counter.counter
      */}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByfive}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementByFive}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

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

export default Counter;

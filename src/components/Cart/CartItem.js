import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { actions as cartActions } from "../../store/redux/cartReducer";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title,id,quantity, totalPrice, price } = props.item;
  const addItemHandler = (event) => {
    dispatch({
      type: cartActions.addItemToCart,
      item: {
        id : id
      },
    });
  };
  const removeItemHandler = (event) => {
    dispatch({
      type: cartActions.removeItemFromCart,
      itemId: id,
    });
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

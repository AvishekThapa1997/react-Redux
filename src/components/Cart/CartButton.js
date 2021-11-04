import classes from "./CartButton.module.css";
import { actions as cartActions } from "../../store/redux/cartReducer";
import { useDispatch,useSelector} from "react-redux";
const CartButton = (props) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onClickHandler = (event) => {
    dispatch({
      type: cartActions.cartVisibility,
    });
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalQuantity}</span>
    </button>
  );
};

export default CartButton;

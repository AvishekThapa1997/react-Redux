import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const cart = useSelector(state => state.cart);
  let content;
  if (cart.items.length > 0) {
    content = <ul>{
      cart.items.map((item) => {
            return (
              <CartItem
                key = {item.id}
                item={item}
              />
            );
        })
      }</ul>
  } else {
    content =<p className={classes["no-item"]}>No Item Available</p>
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {content}
      {/* <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul> */}
    </Card>
  );
};

export default Cart;

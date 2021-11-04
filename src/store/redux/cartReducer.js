const initialState = {
  cartVisibility: false,
  items: [],
  totalQuantity: 0,
};
export const actions = {
  cartVisibility: "cart-visibility",
  addItemToCart: "add-item",
  removeItemFromCart: "remove-item",
};
const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actions.cartVisibility: {
      return {
        cartVisibility: !prevState.cartVisibility,
        items: prevState.items,
        totalQuantity: prevState.totalQuantity,
      };
    }
      case actions.addItemToCart: {
          const newItem = action.item;
          const itemIndexed = prevState.items.findIndex((item) => item.id === newItem.id);
          const updatedItems = [...prevState.items];
          let cartItem;
          if (itemIndexed > -1) {
              const prevItem = prevState.items[itemIndexed];
              cartItem = {
                ...prevState.items[itemIndexed],
                quantity: prevItem.quantity + 1,
                totalPrice: prevItem.totalPrice + prevItem.price,
              };
              updatedItems[itemIndexed] = cartItem;
          } else {
              cartItem = {
                  id: newItem.id,
                  title : newItem.title,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price,
              }
              updatedItems.push(cartItem);
          }
      return {
        cartVisibility: prevState.cartVisibility,
        items: updatedItems,
        totalQuantity: ++prevState.totalQuantity,
      };
    }
      case actions.removeItemFromCart: {
          const itemId = action.itemId;
          const itemIndex = prevState.items.findIndex((item) => item.id === itemId);
          let updatedCartItems;
          if (prevState.items[itemIndex].quantity === 1) {
              updatedCartItems = prevState.items.filter((item) => item.id !== itemId);
          } else {
              const previousItem = prevState.items[itemIndex];
              const updatedItem = {
                  ...previousItem,
                  quantity: --previousItem.quantity,
                  totalPrice : previousItem.totalPrice - previousItem.price
              }
              updatedCartItems = [...prevState.items]
              updatedCartItems[itemIndex] = updatedItem;
          }
      return {
        cartVisibility: prevState.cartVisibility,
        items: updatedCartItems,
        totalQuantity: --prevState.totalQuantity,
      };
    }
    default: {
      return initialState;
    }
  }
};
export default cartReducer;

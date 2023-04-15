import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateedItems = state.item.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemtoCartHandlcer = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandlcer,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
export default CartProvider;

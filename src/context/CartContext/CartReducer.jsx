const addProductToCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart};
};

const decrementProductFromCart = (state, payload) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
if(updatedItem.quantity > 1){
  updatedItem.quantity--;
  updatedCart[updatedItemIndex] = updatedItem;
}
return {
  ...state,
  cart: updatedCart,
 
}};

const removeProductFromCart =(state,payload) => {

   const filteredCarts = state.cart.filter(
      (item) => item.id !== payload.id
    );
    return { cart: filteredCarts };
}
    
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addProductToCart(state, action.payload);
    case "DECREMENT":
      return decrementProductFromCart(state, action.payload);
      case "REMOVE": 
      return removeProductFromCart(state,action.payload);
    
    default:
      return state;
  }
};

export default cartReducer;

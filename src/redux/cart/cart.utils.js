/* eslint-disable import/prefer-default-export */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    cartItems.map(
      (cartItem) => (
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

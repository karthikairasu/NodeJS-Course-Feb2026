import React from 'react'

const useCart = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item) => {
    setCartItems((prev)=> [...prev, {...item, id: prev.length + 1}]);
    console.log(cartItems);
  };
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i !== item));
  };
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }
  return {cartItems, addToCart, removeFromCart, getTotalPrice};
}

export default useCart
import React from 'react';

const Cart = ({cartItems, removeFromCart, getTotalPrice}) => {
  return (
    <div>
        <h1>Cart Page</h1>
        <p>Welcome to the Cart page</p>
        <h2>Cart Items</h2>
        <ul>
            {cartItems && cartItems.map((item) => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
        <h2>Total Price: ${getTotalPrice()}</h2>
        <button onClick={() => removeFromCart(cartItems[0])}>Remove</button>
    </div>
  )
}

export default Cart
import React from 'react'
import useCart from '../hooks/useCart'
import Cart from './Cart';

const Product = () => {
    const product = {
        id: 1,
        name: 'Laptop',
        price: 70000
    }
    const { cartItems, addToCart, removeFromCart, getTotalPrice } = useCart();
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Cart cartItems={cartItems} addToCart={addToCart}
                removeFromCart={removeFromCart}
                getTotalPrice={getTotalPrice} />
        </div>
    )
}

export default Product
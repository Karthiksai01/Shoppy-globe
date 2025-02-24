import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>Your cart is empty.</p> : 
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
            <div className="cart-total">
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={item.images} alt={item.title} />
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <input 
                    type="number" 
                    min="1" 
                    value={item.quantity}
                    onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                />
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;

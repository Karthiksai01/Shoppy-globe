import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
    // Get the dispatch function to dispatch actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            {/* Display product image */}
            <img src={item.images} alt={item.title} />

            <div className="cart-item-details">
                {/* Display product title */}
                <h3>{item.title}</h3>

                {/* Display product price */}
                <p>Price: ${item.price}</p>

                {/* Input field to update quantity of the item */}
                <input 
                    type="number" 
                    min="1" 
                    value={item.quantity}
                    onChange={(e) => 
                        dispatch(updateQuantity({ 
                            id: item.id, 
                            quantity: Number(e.target.value) // Convert input value to number
                        }))
                    }
                />

                {/* Button to remove the item from the cart */}
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;


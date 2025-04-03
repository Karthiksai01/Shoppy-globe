import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; 

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

  return (
  
    <header className="navItems">
      <h1>ShoppyGlobe</h1>
      <nav>
        <Link to="/">Home</Link>   
        <Link to="/cart" className="cart-link">  {/* It is navigate to cart*/}
          <FaShoppingCart className="cart-icon" /> 
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

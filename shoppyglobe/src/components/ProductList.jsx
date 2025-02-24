import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "./Header";

const ProductList = () => {
    const [products, setProducts] = useState([]); //By using state it changes the states
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            console.log(data)
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <Header />
            <input 
                type="text" 
                placeholder="Search products..." 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.images} alt={product.title} />
                        <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList;

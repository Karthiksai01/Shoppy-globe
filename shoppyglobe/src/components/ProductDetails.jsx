import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
//fetching data from the dummy urls with error handlings
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Loading product details...</p>;

// Product details when we click on view more the below data should be visible related to the product
    return (
        <div className="product-detail">
            <img src={product.images} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Brand:{product.brand}</p>
            <p>Rating:{product.rating}</p>
            <p>Discount:{product.discountPercentage}</p>
            <p>Available:{product.availabilityStatus}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;

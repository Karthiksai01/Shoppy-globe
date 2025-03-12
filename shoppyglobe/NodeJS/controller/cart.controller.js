import cartModel from "../model/cart.model.js";

// ✅ Add Product to Cart
export function addToCart(req, res) {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ message: "Product ID and quantity are required!" });
    }

    const newCartItem = new cartModel({ productId, quantity });

    newCartItem.save()
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Get All Cart Items
export function getCartItems(req, res) {
    cartModel.find().populate("productId")
        .then(cartItems => res.json(cartItems))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Update Cart Item Quantity
export function updateCartItem(req, res) {
    cartModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedCartItem => res.json(updatedCartItem))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Remove Item from Cart
export function removeCartItem(req, res) {
    cartModel.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: "Item removed from cart" }))
        .catch(err => res.status(500).json({ message: err.message }));
}

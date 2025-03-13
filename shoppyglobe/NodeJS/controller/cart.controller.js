import cartModel from "../model/cart.model.js";
import productModel from "../model/products.model.js";

// ✅ Add Product to Cart
export async function addToCart(req, res) {
    try {
        const { productId, quantity } = req.body;

        // ❌ Prevent adding empty fields
        if (!productId || !quantity) {
            return res.status(400).json({ message: "Product ID and quantity are required!" });
        }

        // ✅ Check if the product exists
        const productExists = await productModel.findById(productId);
        if (!productExists) {
            return res.status(404).json({ message: "Product not found!" });
        }

        // ✅ Check if product is already in cart
        const existingCartItem = await cartModel.findOne({ productId });
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.status(200).json({ message: "Cart updated", cartItem: existingCartItem });
        }

        // ✅ Add new product to cart
        const newCartItem = new cartModel({ productId, quantity });
        await newCartItem.save();

        res.status(201).json({ message: "Product added to cart", cartItem: newCartItem });
    } catch (err) {
        console.error("Error adding to cart:", err);
        res.status(500).json({ message: "Server error" });
    }
}

// ✅ Get All Cart Items
export function getCartItems(req, res) {
    cartModel.find().populate("productId")
        .then(cartItems => res.json(cartItems))
        .catch(err => res.status(500).json({ message: err.message }));
}

// ✅ Update Cart Item Quantity
export async function updateCartItem(req, res) {
    try {
        const { id } = req.params;
        const { quantity } = req.body;

        console.log(`🔍 Updating cart item: ${id} with quantity: ${quantity}`); // Debugging

        if (!quantity || quantity < 1) {
            return res.status(400).json({ message: "Quantity must be at least 1" });
        }

        const updatedCartItem = await cartModel.findByIdAndUpdate(
            id,
            { quantity },
            { new: true }
        );

        if (!updatedCartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        console.log("✅ Cart item updated:", updatedCartItem);
        res.status(200).json({ message: "Cart updated", cartItem: updatedCartItem });

    } catch (err) {
        console.error("❌ Error updating cart:", err);
        res.status(500).json({ message: "Server error" });
    }
}


// ✅ Remove Item from Cart
export async function removeCartItem(req, res) {
    try {
        const { id } = req.params;
        
        console.log(`🔍 Deleting cart item: ${id}`); // Debugging

        const deletedCartItem = await cartModel.findByIdAndDelete(id);

        if (!deletedCartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        console.log("✅ Cart item deleted:", deletedCartItem);
        res.status(200).json({ message: "Item removed from cart", deletedCartItem });

    } catch (err) {
        console.error("❌ Error deleting cart item:", err);
        res.status(500).json({ message: "Server error" });
    }
}


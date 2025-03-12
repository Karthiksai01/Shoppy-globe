import { addToCart, getCartItems, updateCartItem, removeCartItem } from "../controller/cart.controller.js";

export function cartRoutes(app) {
    app.post("/api/cart", addToCart);
    app.get("/api/cart", getCartItems);
    app.put("/api/cart/:id", updateCartItem);
    app.delete("/api/cart/:id", removeCartItem);
}

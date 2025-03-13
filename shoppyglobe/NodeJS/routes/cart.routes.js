import express from "express";
import { addToCart, getCartItems, updateCartItem, removeCartItem } from "../controller/cart.controller.js";

const router = express.Router();

router.post("/", addToCart); // ✅ Fix: Route should be "/"
router.get("/", getCartItems);
router.put("/:id", updateCartItem);
router.delete("/:id", removeCartItem);

export default router;


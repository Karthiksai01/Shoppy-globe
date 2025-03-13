import express from "express";
import { registerUser, loginUser } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser); // ✅ POST /api/auth/register
router.post("/login", loginUser);

export default router;

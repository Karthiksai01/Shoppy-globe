import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        console.log("🔍 Registering user:", req.body); // Debugging log

        // ✅ 1. Check if all fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // ✅ 2. Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered!" });
        }

        // ✅ 3. Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ 4. Create and save the new user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        console.log("✅ User registered successfully:", newUser);

        // ✅ 5. Generate JWT Token
        const token = jwt.sign({ id: newUser._id }, "your_secret_key", { expiresIn: "1h" });

        res.status(201).json({ message: "User registered successfully!", token });

    } catch (err) {
        console.error("❌ Error registering user:", err);
        res.status(500).json({ message: "Server error" });
    }
}
export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        console.log("🔍 Login attempt:", email); // Debugging log

        // ✅ Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        // ✅ Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // ✅ Generate JWT Token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });

    } catch (err) {
        console.error("❌ Error logging in:", err);
        res.status(500).json({ message: "Server error" });
    }
}

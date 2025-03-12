import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({ username, email, password: hashedPassword });

    newUser.save()
        .then(user => res.status(201).json({ message: "User registered successfully" }))
        .catch(err => res.status(500).json({ message: err.message }));
}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
}

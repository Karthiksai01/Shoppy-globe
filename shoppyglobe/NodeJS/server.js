import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {routes} from "./routes/products.routes.js"; // ✅ Default Import

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 2500;

// Middleware
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Database connected successfully"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// ✅ Routes
routes(app);

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});

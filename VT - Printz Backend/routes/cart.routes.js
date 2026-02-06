import express from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Get User Cart
router.get("/get", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate("cart.productId");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user.cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add to Cart
router.post("/add", authMiddleware, async (req, res) => {
    const { productId, quantity = 1 } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check if product exists
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        // Check if item already in cart
        const cartItemIndex = user.cart.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (cartItemIndex > -1) {
            // Update quantity
            user.cart[cartItemIndex].quantity += quantity;
        } else {
            // Add new item
            user.cart.push({ productId, quantity });
        }

        await user.save();

        // Return updated cart
        const updatedUser = await User.findById(req.user.id).populate("cart.productId");
        res.json({ message: "Added to cart", cart: updatedUser.cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Quantity
router.post("/update", authMiddleware, async (req, res) => {
    const { productId, type } = req.body; // type: 'inc' or 'dec'

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        const cartItem = user.cart.find(
            (item) => item.productId.toString() === productId
        );

        if (!cartItem) return res.status(404).json({ message: "Item not in cart" });

        if (type === "inc") {
            cartItem.quantity += 1;
        } else if (type === "dec") {
            cartItem.quantity -= 1;
            if (cartItem.quantity <= 0) {
                // Remove item if qty is 0
                user.cart = user.cart.filter(
                    (item) => item.productId.toString() !== productId
                );
            }
        }

        await user.save();

        const updatedUser = await User.findById(req.user.id).populate("cart.productId");
        res.json({ message: "Cart updated", cart: updatedUser.cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Remove Item
router.post("/remove", authMiddleware, async (req, res) => {
    const { productId } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.cart = user.cart.filter(
            (item) => item.productId.toString() !== productId
        );

        await user.save();

        const updatedUser = await User.findById(req.user.id).populate("cart.productId");
        res.json({ message: "Item removed", cart: updatedUser.cart });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

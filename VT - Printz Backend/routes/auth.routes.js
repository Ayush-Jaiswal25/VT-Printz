import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import transporter from "../config/mailer.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // 2. Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save user temporarily
    const user = new User({
      email,
      password: hashedPassword,
      otp,
      otpExpires: Date.now() + 10 * 60 * 1000, // 10 mins
    });

    await user.save();

    // 4. Send OTP email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification OTP",
      html: `<h2>Your OTP is: ${otp}</h2>`,
    });

    res.json({ message: "OTP sent to email" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (user.otp !== otp || user.otpExpires < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  user.isVerified = true;
  user.otp = null;
  user.otpExpires = null;

  await user.save();

  res.json({ message: "Email verified successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  if (!user.isVerified) {
    return res.status(400).json({ message: "Email not verified" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});



export default router;

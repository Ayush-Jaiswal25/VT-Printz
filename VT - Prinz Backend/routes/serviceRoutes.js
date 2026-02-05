import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// CREATE SERVICE
router.post("/", async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Failed to save service" });
  }
});

// GET SERVICES
router.get("/", async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.json(services);
});

export default router;

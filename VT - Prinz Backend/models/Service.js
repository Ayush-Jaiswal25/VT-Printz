import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary URL
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);

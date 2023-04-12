import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
  email: String,
  password: String,
  contactInfo: {
    phone: Number,
    email: String,
  },
  brand: String,
  unique_id: { type: String, unique: true },
  created_date: {
    type: Date,
    default: new Date(),
  },
});

const farmerModel = mongoose.model("farmer", farmerSchema);

export default farmerModel;

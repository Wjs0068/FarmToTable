import mongoose from "mongoose";

const consumerSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  interests: Array,
  contactInfo: {
    phone: Number,
    email: string,
  },
  unique_id: { type: String, unique: true },
  created_date: {
    type: Date,
    default: new Date(),
  },
});

const consumerModel = mongoose.model("consumer", consumerSchema);

export default consumerModel;

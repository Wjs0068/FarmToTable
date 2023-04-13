import mongoose from "mongoose";

const storeItemSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const storeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  store_picture: {
    type: String,
    required: true,
  },
  contact_info: {
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  store: {
    type: [storeItemSchema],
    required: true,
  },
});

const Store = mongoose.model("farmers", storeSchema);

export default Store;

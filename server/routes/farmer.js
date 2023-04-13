import express from "express";
const router = express.Router();
import {
  createStore,
  getAllStores,
  getStoreById,
  updateStoreById,
  deleteStoreById,
} from "../controllers/farmer.js";

// Create a new store
router.post("/stores", createStore);

// Get all stores
router.get("/stores", getAllStores);

// Get a store by ID
router.get("/stores/:id", getStoreById);

// Update a store by ID
router.put("/stores/:id", updateStoreById);

// Delete a store by ID
router.delete("/stores/:id", deleteStoreById);
let farmerRouter = router;

export default farmerRouter;

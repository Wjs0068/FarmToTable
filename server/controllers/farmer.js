import Store from "../models/farmer.js";

// Create a new store
export const createStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    const savedStore = await store.save();
    res.status(201).json(savedStore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all stores
export const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a store by ID
export const getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a store by ID
export const updateStoreById = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a store by ID
export const deleteStoreById = async (req, res) => {
  try {
    const store = await Store.findByIdAndDelete(req.params.id);
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }
    res.json({ message: "Store deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

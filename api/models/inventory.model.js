const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    archived: { type: Boolean, default: false },
    archive_comment: { type: String, default: null },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;

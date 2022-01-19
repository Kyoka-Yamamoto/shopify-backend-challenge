const express = require("express");
const Inventory = require("../models/inventory.model");
const inventoryRouter = express.Router();

inventoryRouter
    .route("/")
    .get(async (req, res) => {
        let items;

        const queryKeys = Object.keys(req.query);

        if (queryKeys.length === 0) {
            items = await Inventory.find();
        } else if (queryKeys.length > 0) {
            items = await Inventory.find(req.query, (err, result) => {
                if (err) {
                    console.log("Failed to find items that match query");
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    console.log("Succesfully found items");
                    res.send(result);
                }
            });
        } else {
            console.log("Invalid query");
            res.json({
                error: "Invalid query",
            });
        }

        res.send(items);
    })
    .post((req, res) => {
        const { items } = req.body || {};

        if (items) {
            Inventory.insertMany(items, (err, result) => {
                if (err) {
                    console.log(`Failed to insert ${items.length} items`);
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    console.log(`Succesfully inserted ${items.length} items`);
                    res.send(result);
                }
            });
        } else {
            console.log("Invalid request body, no items");
            res.json({
                error: "Invalid request body, no items",
            });
        }
    });

inventoryRouter
    .route("/:itemId")
    .patch((req, res) => {
        const itemId = req.params.itemId;
        const item = req.body || {};

        if (itemId && item) {
            Inventory.findByIdAndUpdate(itemId, item, (err, result) => {
                if (err) {
                    console.log(`Failed to update item with ID: ${itemId}`);
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    console.log(`Succesfully updated item with ID: ${itemId}`);
                    res.send(result);
                }
            });
        } else {
            console.log("Invalid request, no itemId or item");
            res.json({
                error: "Invalid request, no itemId or item",
            });
        }
    })
    .delete((req, res) => {
        const itemId = req.params.itemId;
        if (itemId) {
            Inventory.findByIdAndDelete(itemId, (err, result) => {
                if (err) {
                    console.log(`Failed to delete item with ID: ${itemId}`);
                    console.log(err.message);
                    res.send(err.message);
                } else {
                    console.log(`Succesfully deleted item with ID: ${itemId}`);
                    res.send(result);
                }
            });
        } else {
            console.log("Invalid request, no itemId");
            res.json({
                error: "Invalid request, no itemId",
            });
        }
    });

module.exports = inventoryRouter;

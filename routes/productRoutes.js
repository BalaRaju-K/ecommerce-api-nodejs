const express = require("express");
const { Product } = require("../models/Product");
const { authenticateUser, authorizeRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, authorizeRole(["admin"]), async (req, res) => {
    try {
        const { name, description, category, price, old_price, expiry_date, vendor_id } = req.body;
        const product = await Product.create({
            name, description, category, price, old_price, expiry_date, vendor_id, image_url: req.file ? req.file.path : null
        });
        res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", authenticateUser, authorizeRole(["admin"]), async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", authenticateUser, authorizeRole(["admin"]), async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", authenticateUser, authorizeRole(["admin"]), async (req, res) => {
    try {
        const { name, description, category, price, old_price, expiry_date } = req.body;
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        product.name = name || product.name;
        product.description = description || product.description;
        product.category = category || product.category;
        product.price = price || product.price;
        product.old_price = old_price || product.old_price;
        product.expiry_date = expiry_date || product.expiry_date;
        
        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", authenticateUser, authorizeRole(["admin"]), async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.destroy();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

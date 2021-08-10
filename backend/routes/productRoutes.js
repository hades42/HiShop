import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";
import mongoose from "mongoose";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public (any one can hit this route)
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.json(products);
  })
);

// @desc    Fetch single products
// @route   GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const valid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (valid) {
      const product = await Product.findById(req.params.id);

      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;

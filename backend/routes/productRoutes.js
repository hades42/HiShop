import express from "express";
const router = express.Router();
import {
  getProductsById,
  getProducts,
  deleteProduct,
  updatedProduct,
  createProduct,
} from "../controller/productController.js";
import { protect, adminProtect } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, adminProtect, createProduct);
router
  .route(`/:id`)
  .get(getProductsById)
  .delete(protect, adminProtect, deleteProduct)
  .put(protect, adminProtect, updatedProduct);

export default router;

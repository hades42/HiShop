import express from "express";
const router = express.Router();
import {
  getProductsById,
  getProducts,
  deleteProduct,
} from "../controller/productController.js";
import { protect, adminProtect } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts);
router
  .route(`/:id`)
  .get(getProductsById)
  .delete(protect, adminProtect, deleteProduct);

export default router;

import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  updateUserprofile,
  registerUser,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserprofile);

export default router;

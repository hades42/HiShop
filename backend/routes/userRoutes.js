import express from "express";
const router = express.Router();
import {
  authUser,
  getUserProfile,
  updateUserprofile,
  registerUser,
  getUsers,
} from "../controller/userController.js";
import { protect, adminProtect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, adminProtect, getUsers);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserprofile);

export default router;

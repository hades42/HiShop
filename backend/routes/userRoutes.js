import express from "express";
const router = express.Router();
import { authUser } from "../controller/userController.js";

router.route("/login").post(authUser);

export default router;

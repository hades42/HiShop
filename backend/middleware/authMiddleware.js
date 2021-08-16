import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get thing without password
      let info = await User.findById(decoded.id).select("-password");
      req.user = info;
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token fail");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const adminProtect = (req, res, next) => {
  console.log(req.user.isAdmin);
  if (req.user && req.user.isAdmin) {
    console.log("ahihi");
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as admin");
  }
};

export { protect, adminProtect };

import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    // Individual rating
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    // Associate the user with the review
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // Add a relationship between product and user.
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    // only Admin is allowed to add product, so we have to know which user is admin that create which product.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // Add a relationship between product and user.
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    // Average rating
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

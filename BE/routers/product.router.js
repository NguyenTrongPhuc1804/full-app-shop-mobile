const express = require("express");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  deteleProduct,
  getDetailProduct,
} = require("../controllers/product.controller");
const uploadImage = require("../middlewares/upload/uploadImage");
const removeImage = require("../middlewares/upload/removeImage");
const { Authenticate } = require("../middlewares/Auth/AuthMiddleware");
const Authorize = require("../middlewares/Auth/Author");
const { listAuthor } = require("../utils/validateVariable");
const ProductRouter = express.Router();
ProductRouter.post(
  Authenticate,
  Authorize(listAuthor),
  "/create",
  uploadImage("image", "productImage"),
  createProduct
);
ProductRouter.get("/", getAllProduct);
ProductRouter.get("/:id", getDetailProduct);
ProductRouter.put(
  Authenticate,
  Authorize(listAuthor),
  "/update/:id",
  removeImage,
  uploadImage("image", "productImage"),
  updateProduct
);
ProductRouter.delete(
  "/delete/:id",
  Authenticate,
  Authorize(listAuthor),
  deteleProduct
);
module.exports = ProductRouter;

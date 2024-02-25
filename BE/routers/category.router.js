const express = require("express");
const {
  createCategory,
  getAllCategory,
  getDetailCAtegory,
  updateCategory,
  deleteCategory,
  getListProductbyId,
} = require("../controllers/category.controller");
const uploadImageCate = require("../middlewares/upload/uploadImage");
const uploadImage = require("../middlewares/upload/uploadImage");
const removeImage = require("../middlewares/upload/removeImage");
const { Authenticate } = require("../middlewares/Auth/AuthMiddleware");
const Authorize = require("../middlewares/Auth/Author");
const { listAuthor } = require("../utils/validateVariable");
const categoryRouter = express.Router();
categoryRouter.post(
  "/create",
  uploadImageCate("image", "category"),
  createCategory
);
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getDetailCAtegory);
categoryRouter.put(
  Authenticate,
  Authorize(listAuthor),
  "/update/:id",
  removeImage,
  uploadImage("image", "category"),
  updateCategory
);
categoryRouter.delete(
  "/delete/:id",
  Authenticate,
  Authenticate(listAuthor),
  deleteCategory
);
categoryRouter.get("/:id/product", getListProductbyId);
module.exports = categoryRouter;

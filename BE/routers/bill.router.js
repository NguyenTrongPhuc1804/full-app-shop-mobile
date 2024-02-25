const express = require("express");
const {
  createBill,
  getAllBill,
  getBillByUser,
  getDetailBill,
} = require("../controllers/bill.controll");
const { Authenticate } = require("../middlewares/Auth/AuthMiddleware");
const Authorize = require("../middlewares/Auth/Author");
const { listAuthor } = require("../utils/validateVariable");
const billRouter = express.Router();
billRouter.post("/create", Authenticate, Authorize(listAuthor), createBill);
billRouter.get("/", Authenticate, getAllBill);
billRouter.get("/user", Authenticate, getBillByUser);
billRouter.get("/:code", getDetailBill);
module.exports = billRouter;

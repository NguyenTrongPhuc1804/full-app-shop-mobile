const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const rootRouter = require("./routers");
var bodyParser = require("body-parser");
const { sequelize } = require("./models");
require("dotenv").config();

const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

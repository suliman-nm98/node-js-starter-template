// src/routes/index.js
const express = require("express");
const authRoutes = require("./authRoutes");
// const exampleRoutes = require("./exampleRoutes");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use("/auth", authRoutes);
// router.use("/example", authMiddleware, exampleRoutes);

module.exports = router;

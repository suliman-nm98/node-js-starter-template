// src/index.js
const express = require("express");
const dotenv = require("dotenv");
const logger = require("./utils/logger");

// Load environment variables from .env file
dotenv.config();
//test
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const apiRoutes = require("./routes");
app.use("/api", apiRoutes);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

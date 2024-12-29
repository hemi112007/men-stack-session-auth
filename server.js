const dotenv = require("dotenv");
dotenv.config();
require('./config/database')

const express = require("express");
const app = express();

const methodOverride = require("method-override");
const morgan = require("morgan");

// Controllers
const authController = require("./controllers/auth.js");

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));

// Public route
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Authentication routes
app.use("/auth", authController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
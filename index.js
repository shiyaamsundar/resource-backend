const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("server is running");
});

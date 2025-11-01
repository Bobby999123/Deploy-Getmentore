const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const projectRoute = require("./routes/projects");

dotenv.config();

const port = process.env.PORT || 8800;

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use(express.static("client"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/projects", projectRoute);

app.listen(port, () => {
  console.log("Backend Server is running on " + port);
});

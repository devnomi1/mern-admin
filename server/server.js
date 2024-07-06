require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact");
const connectDB = require("./utils/db");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorHandler);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running at the port 5000");
  });
});

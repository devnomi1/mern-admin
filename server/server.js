require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/auth");
const contactRoute = require("./routes/contact");
const connectDB = require("./utils/db");
const errorHandler = require("./middlewares/errorHandler");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, DELETE, PUT, PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoute);
app.use("/form", contactRoute);
app.use(errorHandler);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is running at the port 8080");
  });
});

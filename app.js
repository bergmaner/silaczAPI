const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const all_routes = require("express-list-endpoints");

const User = require("./models/user");

require("dotenv").config();

const app = express();

const authRoutes = require("./routes/auth");
const trainingRoutes = require("./routes/training");
const excerciseRoutes = require("./routes/excercise");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", trainingRoutes);
app.use("/api", excerciseRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

all_routes(app).map((item) => console.log(item.methods + "" + item.path));

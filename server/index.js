const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/", router);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`App is listening on PORT : ${port}`);
});

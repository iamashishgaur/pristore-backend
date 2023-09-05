const express = require("express");
require("colors");
const dbConnect = require("./config/dbConnect");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const productRouter = require("./routes/productRoute");
const categoryRouter = require("./routes/prodcategoryRoute");
const brandRouter = require("./routes/brandRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enqRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const authRouter = require("./routes/authRoute");
const cookieParser = require("cookie-parser");
dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use("/", (req, res) => {
//   res.send("Hello From server");
// });

// all Router
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);
app.use(notFound);
app.use(errorHandler);
const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`.bgMagenta.white);
});

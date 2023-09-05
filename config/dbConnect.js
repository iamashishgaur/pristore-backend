const { default: mongoose } = require("mongoose");
require("colors");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log(`Database Connected Successfully `.bgCyan.white);
  } catch (error) {
    console.error(`Error : ${error.message}`.bgRed.white);
  }
};
module.exports = dbConnect;

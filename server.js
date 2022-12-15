const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
mongoose.set('strictQuery', true);
const { DB_HOST, PORT=3004 } = process.env;

mongoose
  .connect(DB_HOST,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log("Started ok")))
  .catch((err) => {
    console.log(err.message);
    process.exitCode = 1;
  });

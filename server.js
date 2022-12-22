const mongoose = require("mongoose");
const app = require("./app");
mongoose.set('strictQuery', true);
const { DB_HOST, PORT=3004 } = process.env;

mongoose
  .connect('mongodb+srv://Mansur:Rzj8yE9XVfUq40vp@cluster0.cojdy0d.mongodb.net/pro-test?retryWrites=true&w=majority')
  .then(() => app.listen(PORT, () => console.log("Started ok")))
  .catch((err) => {
    console.log(err.message);
    process.exitCode = 1;
  });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const authRouter = require("./routes/api/auth");

const techQuestionsRouter = require("./routes/api/techQuestions");
const theoryQuestionsRouter = require("./routes/api/theoryQuestions");

const literatureRouter = require("./routes/api/literature");
const resourcesRouter = require("./routes/api/resources");

const userAvatarsRouter = require("./routes/api/userAvatar");

app.use(cors());
app.use(express.json());

app.use(express.static("public"));


// app.use(express.urlencoded({ extended: false }));
// app.use(express.json(100000000));

//app.use("/pages/users", authPages);


app.use("/api/users", authRouter);

app.use("/api/questions/tech", techQuestionsRouter);
app.use("/api/questions/theory", theoryQuestionsRouter);


app.use("/api/teams", userAvatarsRouter);


// app.use((error, req, res, next) => {
//   // const message = `это неожиданное поле -> "${error.field}"`
//   console.log(message);
//   console.log(error.message);
//   return res.status(500).send(message);
// })



app.use("/api/literature", literatureRouter);
app.use("/api/resources", resourcesRouter);


app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status).json({ message: err.message });
});
app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;

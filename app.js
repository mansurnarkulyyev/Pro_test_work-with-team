const express = require("express");
const cors = require("cors");
require("dotenv").config();

// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// import session from 'express-session';
const passport = require("passport");


const app = express();

const authRouter = require("./routes/api/auth");

const techQuestionsRouter = require("./routes/api/techQuestions");
const theoryQuestionsRouter = require("./routes/api/theoryQuestions");

const literatureRouter = require("./routes/api/literature");
const resourcesRouter = require("./routes/api/resources");

const contactsRouter = require("./routes/api/contacts");

// const passportSetup = require("./middleware/authenticate-social")


app.use(cors());
app.use(express.json());

app.use(express.static("public"));



app.use(passport.initialize());
// app.use(passport.session());
// app.use(
//   session({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       sameSite: "none",
//       secure: true,
//       maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
//     }
//   }))


app.use("/api/users", authRouter);


app.use("/api/questions/tech", techQuestionsRouter);
app.use("/api/questions/theory", theoryQuestionsRouter);

app.use("/api/contacts", contactsRouter);

app.use("/api/literature", literatureRouter);
app.use("/api/resources", resourcesRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  next(err);
});

module.exports = app;

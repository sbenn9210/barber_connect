const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();

//DB config
const db = require("./config/keys").mongoURL;

// Connect to MongoDB
mongoose
  .connect(
    process.env.db,

    {
      useNewUrlParser: true,
      auth: {
        user: process.env.shawnbenny1,
        password: process.env.shawnbenny1
      }
    }
  )

  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello"));

//process.env.port is needed when deploying to heroku
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

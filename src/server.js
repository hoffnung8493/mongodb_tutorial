const express = require("express");
const app = express();
const { userRouter, blogRouter } = require("./routes");
const mongoose = require("mongoose");
const { generateFakeData } = require("../faker2");

const MONGO_URI =
  "mongodb+srv://admin:hJgwNcRhb3mDMqYg@mongodbtutorial.flkpp.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    // mongoose.set("debug", true);
    console.log("MongoDB connected");
    app.use(express.json());

    app.use("/user", userRouter);
    app.use("/blog", blogRouter);

    app.listen(3000, async () => {
      console.log("server listening on port 3000");
      // console.time("insert time: ");
      // await generateFakeData(10, 2, 10);
      // console.timeEnd("insert time: ");
    });
  } catch (err) {
    console.log(err);
  }
};

server();

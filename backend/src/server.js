const express = require("express");
const SessionRoutes = require("./routes/SessionRoutes");
const UserRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://gostackonoff:gostackonoff@gostackonoff-bk1yp.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(express.json());
app.use("/api/v1/sessions", SessionRoutes);
app.use("/api/v1/users", UserRoutes);

app.listen(3333);

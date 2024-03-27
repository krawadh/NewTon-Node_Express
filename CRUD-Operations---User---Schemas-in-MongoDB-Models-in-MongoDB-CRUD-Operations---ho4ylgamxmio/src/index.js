const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//connect to DB
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const url = process.env.MONGO_URL || "mongodb://localhost:27017/Anshika";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(3001, () => console.log("Server running......"));

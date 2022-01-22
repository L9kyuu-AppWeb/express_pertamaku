const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/express_pertamaku", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("database berhasil terhubung");
});

const express = require("express");
const router = express.Router();
const connection = require("./koneksi");

router.get("/", function (req, res) {
  res.send("Got a GET Behasil");
});

router.get("/users", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const db = connection.db("dblatihan");
      const users = db.collection("users").find().toArray();
      res.send({ data: users });
    } else {
      res.send({ message: "koneksi database gagal" });
    }
  } catch (err) {
    res.send({
      message: err.message + " error Router" || "internal server error",
    });
  }
});

module.exports = router;

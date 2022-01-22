const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const connection = require("./koneksi");
require("./mongoose.js");

router.get("/", function (req, res) {
  res.send("Got a GET Behasil");
});

router.get("/usersM", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ data: users });
  } catch (err) {
    res.send({
      message: err.message + " error Router" || "internal server error",
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    if (connection.isConnected()) {
      const db = connection.db("express_pertamaku");
      const users = await db.collection("users").find().toArray();
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

// router.post("/users", async (req, res) => {
//   try {
//     if (connection.isConnected()) {
//       const db = connection.db("dblatihan");
//       const { nama, hobi, alamat } = req.body;
//       const users = await db.collection("users").insertOne({
//         nama,
//         hobi,
//         alamat,
//       });
//       if (users.insertedCount === 1) {
//         res.send({ message: " Berhasil ditambahkan" });
//       } else {
//         res.send({ message: " Gagal ditambahkan" });
//       }
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({
//       message: err.message + " error Router" || "internal server error",
//     });
//   }
// });

// router.put("/users/:id", async (req, res) => {
//   try {
//     if (connection.isConnected()) {
//       const db = connection.db("dblatihan");
//       const { id } = req.params;
//       const { nama, hobi, alamat } = req.body;
//       const users = await db.collection("users").updateOne(
//         { _id: ObjectId(id) },
//         {
//           $set: {
//             nama,
//             hobi,
//             alamat,
//           },
//         }
//       );
//       if (users.modifiedCount == 1) {
//         res.send({ message: " Berhasil diperbaharui" });
//       }
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({
//       message: err.message || "internal server error",
//     });
//   }
// });

// router.delete("/users/:id", async (req, res) => {
//   try {
//     if (connection.isConnected()) {
//       const db = connection.db("dblatihan");
//       const { id } = req.params;
//       const { nama, hobi, alamat } = req.body;
//       const users = await db
//         .collection("users")
//         .deleteOne({ _id: ObjectId(id) });
//       if (users.deletedCount == 1) {
//         res.send({ message: " Berhasil dihapus" });
//       }
//     } else {
//       res.send({ message: "koneksi database gagal" });
//     }
//   } catch (err) {
//     res.send({
//       message: err.message || "internal server error",
//     });
//   }
// });

module.exports = router;
